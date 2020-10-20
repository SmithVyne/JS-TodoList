import puppeteer from 'puppeteer'

afterAll(async () => {
  const browser = await puppeteer.launch();
  await browser.close();
})


test('New Project inputfield: Should return registered project name', async () => {
  const browser = await puppeteer.launch(
    {
      headless: false,
      slowMo: 120,
    }
  );
  const page = await browser.newPage();
  const app = 'http://localhost:9000/';
  
  await page.goto(app);
  await page.click('button#btnAddProjModal');
  await page.type('input#projectTitle', 'Adding Test Project');
  const val = await page.$eval('input#projectTitle', input => input.value);

  expect(val).toBe('Adding Test Project');
}, 14000);

test('Project Acordion parent: Should be rendered on the page', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const app = 'http://localhost:9000/';
  
  await page.goto(app);
  const accordion = await page.$eval('div#accordionExample', div => div.className)

  expect(accordion).toMatch(/accordion-test/);
}, 10000);

test('New_project_modal_Button: Should be rendered on the page', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const app = 'http://localhost:9000/';  
  await page.goto(app);

  const newProjectModalClass = await page.$eval('button#btnAddProjModal', btn => btn.className);
  expect(newProjectModalClass).toMatch(/test-btnAddProjModal/);
}, 10000);

