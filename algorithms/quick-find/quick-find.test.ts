import 'should';
import QuickFind from './quick-find';

describe('Quick Find', () => {
  const n = 10;
  let qf: QuickFind;

  beforeEach(() => {
    qf = new QuickFind(n);
  });

  it('should not find any unions after initialization', () => {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        qf.connected(i , j).should.be.false();
      }
    }
  });

  context('should find connections and', () => {
    it('should be reflective', () => {
      for (let i = 0; i < n; i++) {
        qf.connected(i, i).should.be.true();
      }
    });

    it('should be symmetric', () => {
      qf.union(0, 1);
      qf.connected(0, 1).should.be.true();
      qf.connected(1, 0).should.be.true();
    });

    it('should be transitive', () => {
      qf.union(0, 2);
      qf.union(2, 4);
      qf.union(4, 6);
      qf.connected(2, 6).should.be.true();
      qf.connected(0, 6).should.be.true();
    });
  })
});
