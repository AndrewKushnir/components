/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {$, browser} from 'protractor';
import {runBenchmark} from '@angular/dev-infra-private/benchmark/driver-utilities';

describe('button performance benchmarks', () => {
  beforeAll(() => {
    browser.rootEl = '#root';
  });

  it('renders a basic raised button', async() => {
    await runBenchmark({
      id: 'button-render',
      url: '',
      ignoreBrowserSynchronization: true,
      params: [],
      prepare: async () => await $('#hide').click(),
      work: async () => await $('#show').click(),
    });
  });

  it('clicks a basic raised button', async() => {
    await runBenchmark({
      id: 'button-click',
      url: '',
      ignoreBrowserSynchronization: true,
      params: [],
      setup: async () => await $('#show').click(),
<<<<<<< HEAD
<<<<<<< HEAD
      work: async () => await $('.mat-mdc-raised-button').click(),
=======
      work: async () => await $('.mat-raised-button').click(),
>>>>>>> f1ae4d955... test(mdc-button): add performance tests for mdc-button
=======
      work: async () => await $('.mat-mdc-raised-button').click(),
>>>>>>> 63f2747fc... fixup! test(mdc-button): add performance tests for mdc-button
    });
  });
});