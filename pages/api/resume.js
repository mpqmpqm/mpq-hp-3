import puppeteer from "puppeteer"

export default async function returnResume(req, res) {
  const pdf = await (async function printPDF() {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto("https://mpq.dev/resume", { waitUntil: "networkidle0" })
    const pdf = await page.pdf({
      format: "Letter",
      margin: [`top`, `bottom`, `left`, `right`].reduce(
        (acc, curr) => ({ ...acc, [curr]: `0.5in` }),
        {}
      ),
    })

    await browser.close()
    return pdf
  })()

  res.setHeader("Content-disposition", 'attachment; filename="MPQ_Resume.pdf')
  res.setHeader("Content-Type", "application/pdf")

  res.send(pdf)
}