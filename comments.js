// create web browser
const puppeteer = require('puppeteer');

// create comment function
const comment = async (url, comment) => {
  // open browser
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--disable-notifications']
  });

  // open new page
  const page = await browser.newPage();

  // go to the url
  await page.goto(url);

  // wait for the page to load
  await page.waitFor(3000);

  // click on the comment box
  await page.click('.Ypffh');

  // type the comment
  await page.keyboard.type(comment);

  // wait for the comment to load
  await page.waitFor(2000);

  // click on the post button
  await page.click('button[type="submit"]');

  // wait for the comment to post
  await page.waitFor(2000);

  // close the browser
  await browser.close();
};

// export the module
module.exports = comment;