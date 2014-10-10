describe('powerOfTwo', function() {

   it('should return 1 when given 0 as an argument', function() {
      expect(powerOfTwo(0)).to.equal(1);
   });

   it('should return 2 when given 1 as an argument', function() {
      expect(powerOfTwo(1)).to.equal(2);
   });

   it('should return 4 when given 2 as an argument', function() {
      expect(powerOfTwo(2)).to.equal(4);
   });

   it('should return 8 when given 3 as an argument', function() {
      expect(powerOfTwo(3)).to.equal(8);
   });

   it('should return 16 when given 4 as an argument', function() {
      expect(powerOfTwo(4)).to.equal(16);
   });

   it('should return 32 when given 5 as an argument', function() {
      expect(powerOfTwo(5)).to.equal(32);
   });

   it('should return 64 when given 6 as an argument', function() {
      expect(powerOfTwo(6)).to.equal(64);
   });

   it('should return 128 when given 7 as an argument', function() {
      expect(powerOfTwo(7)).to.equal(128);
   });

   it('should return 256 when given 8 as an argument', function() {
      expect(powerOfTwo(8)).to.equal(256);
   });

   it('should return 512 when given 9 as an argument', function() {
      expect(powerOfTwo(9)).to.equal(512);
   });

   it('should return 1024 when given 10 as an argument', function() {
      expect(powerOfTwo(10)).to.equal(1024);
   });

   it('should return 2048 when given 11 as an argument', function() {
      expect(powerOfTwo(11)).to.equal(2048);
   });

   it('should return 4096 when given 12 as an argument', function() {
      expect(powerOfTwo(12)).to.equal(4096);
   });

   it('should return 8192 when given 13 as an argument', function() {
      expect(powerOfTwo(13)).to.equal(8192);
   });

   it('should return 16384 when given 14 as an argument', function() {
      expect(powerOfTwo(14)).to.equal(16384);
   });

   it('should return 32768 when given 15 as an argument', function() {
      expect(powerOfTwo(15)).to.equal(32768);
   });

   it('should return 65536 when given 16 as an argument', function() {
      expect(powerOfTwo(16)).to.equal(65536);
   });

   it('should return 131072 when given 17 as an argument', function() {
      expect(powerOfTwo(17)).to.equal(131072);
   });

   it('should return 262144 when given 18 as an argument', function() {
      expect(powerOfTwo(18)).to.equal(262144);
   });

   it('should return 524288 when given 19 as an argument', function() {
      expect(powerOfTwo(19)).to.equal(524288);
   });

   it('should return 1048576 when given 20 as an argument', function() {
      expect(powerOfTwo(20)).to.equal(1048576);
   });

});