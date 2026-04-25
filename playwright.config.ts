import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: './all-tested-systems/**/*.feature',
  steps: [
    './all-tested-systems/**/*.steps.ts',
    './all-tested-systems/**/fixtures.ts'
  ],
  outputDir: '.features-gen',
});

export default defineConfig({
  testDir,

  fullyParallel: true,

  reporter: [['html', { open: 'never' }]],

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});