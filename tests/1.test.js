
/**
 * use nodeunit
 */

exports.testNot = {
"!false": function(test) {
           test.ok(!false);
           test.done();
       },

"!undefined": function(test) {
           test.ok(!undefined);
           test.done();
       },

"!0": function(test) {
           test.ok(!0);
           test.done();
       },

"!null": function(test) {
           test.ok(!null);
           test.done();
       },

"{}": function(test) {
           test.ok({});
           test.done();
       },

"[]": function(test) {
           test.ok([]);
           test.done();
       },

"!''": function(test) {
           test.ok(!'');
           test.done();
       },

}


exports.testNaive = {
"false != undefined": function(test) {
           test.ok(false != undefined);
           test.done();
       },

"false == 0": function(test) {
           test.ok(false == 0);
           test.done();
       },

"false != null": function(test) {
           test.ok(false != null);
           test.done();
       },

"false != {}": function(test) {
           test.ok(false != {});
           test.done();
       },

"false == []": function(test) {
           test.ok(false == []);
           test.done();
       },

"false == ''": function(test) {
           test.ok(false == '');
           test.done();
       },

"undefined != 0": function(test) {
           test.ok(undefined != 0);
           test.done();
       },

"undefined == null": function(test) {
           test.ok(undefined == null);
           test.done();
       },

"undefined != {}": function(test) {
           test.ok(undefined != {});
           test.done();
       },

"undefined != []": function(test) {
            test.ok(undefined != []);
            test.done();
        },

"undefined != ''": function(test) {
            test.ok(undefined != '');
            test.done();
        },

"0 != null": function(test) {
           test.ok(0 != null);
           test.done();
       },

"0 != {}": function(test) {
           test.ok(0 != {});
           test.done();
       },

"0 == []": function(test) {
           test.ok(0 == []);
           test.done();
       },

"0 == ''": function(test) {
           test.ok(0 == '');
           test.done();
       },

"null != {}": function(test) {
           test.ok(null != {});
           test.done();
       },

"null != []": function(test) {
           test.ok(null != []);
           test.done();
       },

"null != ''": function(test) {
           test.ok(null != '');
           test.done();
       },

"{} != []": function(test) {
           test.ok({} != []);
           test.done();
       },

"{} != ''": function(test) {
           test.ok({} != '');
           test.done();
       },

"[] == ''": function(test) {
            test.ok([] == '');
            test.done();
        },
}


exports.testStrict = {
"false !== undefined": function(test) {
           test.ok(false !== undefined);
           test.done();
       },

"false !== 0": function(test) {
           test.ok(false !== 0);
           test.done();
       },

"false !== null": function(test) {
           test.ok(false !== null);
           test.done();
       },

"false !== {}": function(test) {
           test.ok(false !== {});
           test.done();
       },

"false !== []": function(test) {
           test.ok(false !== []);
           test.done();
       },

"false !== ''": function(test) {
           test.ok(false !== '');
           test.done();
       },

"undefined !== 0": function(test) {
           test.ok(undefined !== 0);
           test.done();
       },

"undefined !== null": function(test) {
           test.ok(undefined !== null);
           test.done();
       },

"undefined !== {}": function(test) {
           test.ok(undefined !== {});
           test.done();
       },

"undefined !== []": function(test) {
            test.ok(undefined !== []);
            test.done();
        },

"undefined !== ''": function(test) {
            test.ok(undefined !== '');
            test.done();
        },

"0 !== null": function(test) {
           test.ok(0 !== null);
           test.done();
       },

"0 !== {}": function(test) {
           test.ok(0 !== {});
           test.done();
       },

"0 !== []": function(test) {
           test.ok(0 !== []);
           test.done();
       },

"0 !== ''": function(test) {
           test.ok(0 !== '');
           test.done();
       },

"null !== {}": function(test) {
           test.ok(null !== {});
           test.done();
       },

"null !== []": function(test) {
           test.ok(null !== []);
           test.done();
       },

"null !== ''": function(test) {
           test.ok(null !== '');
           test.done();
       },

"{} !== []": function(test) {
           test.ok({} !== []);
           test.done();
       },

"{} !== ''": function(test) {
           test.ok({} !== '');
           test.done();
       },

"[] !== ''": function(test) {
            test.ok([] !== '');
            test.done();
        },
}



