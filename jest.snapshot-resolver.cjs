const resolveSnapshotPath =
  (testPath, snapshotExtension) =>
    testPath
      .replace('.test' + '.js', '.test' + snapshotExtension)
      .replace('/cjs/', '/src/')

const resolveTestPath =
  (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace(snapshotExtension, '.js')
      .replace('/src/', '/cjs/')

const testPathForConsistencyCheck =
  './cjs/index.test.js'

module.exports = {
  resolveSnapshotPath,
  resolveTestPath,
  testPathForConsistencyCheck
}
