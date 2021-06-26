// import puppeteer from "puppeteer-core"
import chromium from "chrome-aws-lambda"

export default async function returnResume(req, res) {
  const pdf = await (async function printPDF() {
    const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    })
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
