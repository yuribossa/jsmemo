
###
# use nodeunit
###

exports.testHatena = {
    "false?": (test) ->
        x = false
        x = true if false?
        test.ok x
        test.done()

    "not undefined?": (test) ->
        x = false
        x = true if undefined?
        test.ok not x
        test.done()

    "0?": (test) ->
        x = false
        x = true if 0?
        test.ok x
        test.done()

    "{}?": (test) ->
        x = false
        x = true if {}?
        test.ok x
        test.done()

    "[]?": (test) ->
        x = false
        x = true if []?
        test.ok x
        test.done()

    "''?": (test) ->
        x = false
        x = true if ''?
        test.ok x
        test.done()

        }

