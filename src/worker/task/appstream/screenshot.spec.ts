/**
 * houston/src/worker/task/appstream/screenshot.spec.ts
 * Tests the appstream screenshot test
 */

import { AppstreamScreenshot } from './screenshot'

import { mock } from '../../../../test/utility/worker'

test('passes with screenshots specified', async () => {
  const worker = await mock({
    nameAppstream: 'com.github.philip-scott.spice-up.desktop',
    nameDomain: 'com.github.philip-scott.spice-up'
  })

  await worker.mock('task/appstream/spice-up.xml', 'package/usr/share/metainfo/com.github.philip-scott.spice-up.appdata.xml')

  await worker.setup()
  await worker.run(AppstreamScreenshot)
  await worker.teardown()

  expect(worker.storage.logs).toHaveLength(0)
})
