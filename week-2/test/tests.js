// These tests are unit tests.

QUnit.module("Addition", function(asserts) {

  QUnit.test( "When 2 and 3, returns 5", function (assert) {
      assert.equal( addition(2, 3), 5, "Should return 5" );
  });

  QUnit.test( "When 100 and 3, returns 103", function (assert) {
      assert.equal( addition(100, 3), 103, "Should return 103" );
  });

});


QUnit.module("Multiplication", function(asserts) {

  QUnit.test( "When 5 and 7, returns 35", function (assert) {
      assert.equal( multiplication(5, 7), 35, "Should return 35" );
  });

  QUnit.test( "When 17 and 10, returns 170", function (assert) {
      assert.equal( multiplication(17, 10), 170, "Should return 170" );
  });

});


QUnit.module("Subtraction", function(asserts) {

  QUnit.test( "When 30 and 19, returns 11", function (assert) {
      assert.equal( subtraction(30, 19), 11, "Should return 11" );
  });

  QUnit.test( "When 230 and 30, returns 200", function (assert) {
      assert.equal( subtraction(230, 30), 200, "Should return 200" );
  });

});


// These tests are integration tests.

QUnit.module("Integration", function(asserts) {

  QUnit.test( "When 2, 3, 4, 5 returns 15", function (assert) {
      assert.equal( integration(2, 3, 4, 5), 15, "Should return 15" );
  });

  QUnit.test( "When 2, 10, 5, 3 returns 57", function (assert) {
      assert.equal( integration(2, 10, 5, 3), 57, "Should return 57" );
  });

});
