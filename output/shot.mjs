import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';

const root = 'C:/Users/leand/Documents/Repositorios/Portafolio';
const outDir = `${root}/output/playwright`;
mkdirSync(outDir, { recursive: true });

const node = 'C:/Users/leand/AppData/Local/Programs/Xiaomi MiMo AI/resources/runtimes/win32-x64/node/node.exe';
const viteBin = `${root}/node_modules/vite/bin/vite.js`;

const server = spawn(node, [viteBin, '--host', '127.0.0.1', '--port', '5199'], {
  cwd: root,
  stdio: ['ignore', 'pipe', 'pipe'],
  windowsHide: true,
});

let ready = false;
server.stdout.on('data', (d) => {
  const s = d.toString();
  process.stdout.write(s);
  if (s.includes('Local:') || s.includes('5199')) ready = true;
});
server.stderr.on('data', (d) => process.stderr.write(d.toString()));

await new Promise((resolve, reject) => {
  const t0 = Date.now();
  const tick = async () => {
    if (ready) return resolve();
    try {
      const r = await fetch('http://127.0.0.1:5199');
      if (r.ok) return resolve();
    } catch {}
    if (Date.now() - t0 > 25000) return reject(new Error('server timeout'));
    setTimeout(tick, 250);
  };
  tick();
});

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
page.on('pageerror', (e) => console.error('PAGEERROR', e.message));
page.on('console', (m) => {
  if (m.type() === 'error') console.error('CONSOLE', m.text());
});

await page.goto('http://127.0.0.1:5199', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3500);
await page.screenshot({ path: `${outDir}/01-arrival.png`, fullPage: false });

const btn = page.getByRole('button', { name: /Mirar alrededor|Look around/i });
if (await btn.count()) {
  await btn.first().click();
  await page.waitForTimeout(2000);
}
await page.screenshot({ path: `${outDir}/02-study.png`, fullPage: false });

const story = page.getByRole('button', { name: /Historia|Story/i }).first();
if (await story.count()) {
  await story.click();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${outDir}/03-story.png`, fullPage: false });
}

const work = page.getByRole('button', { name: /Proyectos|Work/i }).first();
if (await work.count()) {
  await work.click();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${outDir}/04-work.png`, fullPage: false });
}

const tools = page.getByRole('button', { name: /Herramientas|Tools/i }).first();
if (await tools.count()) {
  await tools.click();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${outDir}/05-tools.png`, fullPage: false });
}

const path = page.getByRole('button', { name: /Camino|Path/i }).first();
if (await path.count()) {
  await path.click();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${outDir}/06-path.png`, fullPage: false });
}

const hello = page.getByRole('button', { name: /Hola|Hello/i }).first();
if (await hello.count()) {
  await hello.click();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: `${outDir}/07-hello.png`, fullPage: false });
}

// Language switch via topbar button containing EN or ES text
const langBtn = page.locator('button.ghost-btn').filter({ hasText: /^EN$|^ES$/ }).first();
if (await langBtn.count()) {
  await langBtn.click();
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${outDir}/08-lang-switch.png`, fullPage: false });
}

await browser.close();
server.kill('SIGTERM');
console.log('DONE', outDir);
process.exit(0);
