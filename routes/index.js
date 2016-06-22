var express = require('express');
var sg = require('simple-git')('../qa2');
var router = express.Router();

router.get('/', function (req, res, next) {

    /* GET home page. */
    sg.addRemote('origin', 'https://gawainBarnickle:38ac1908f18591e1615c48549af86660af548811@github.com/gawainBarnickle/qa2.git',
        function (err, tokenRes) {
            sg.fetch('origin', 'master', function (err, festchResult) {
                sg.log(function (err, logResult) {
                    console.log(logResult);

                    //
                    for (var i = 0; i < logResult.all.length; i++) {
                        var commit = logResult.all[i];
                        console.log("commit ", commit.hash, commit.message)
                        sg.removeRemote('origin')
                    }
                    res.render('index', {title: 'QA Auto Deploy', fetch: logResult.toString()});


                });
            });
        });
});


// router.get('/update', function (req, res, next){
//     sg.addRemote('origin', 'https://gawainBarnickle:38ac1908f18591e1615c48549af86660af548811@github.com/gawainBarnickle/qa2.git', function (err, tokensRes) {
//
//         sg.pull('origin', 'master', function(err,pullRes) {
//
//             req.query.commit
//
//             sg.checkout('1f9642f15a7e69de1732279acbb132b490669513', function (err, checkRes){
//
//
//
//             });
//         });
//     });
// });

module.exports = router;

var o =
    {
        latest: {
            hash: '1f9642f15a7e69de1732279acbb132b490669513',
            date: '2016-06-16 22:49:20 -0700',
            message: 'Merge branch \'master\' of https://github.com/gawainBarnickle/qa2 (HEAD, master)',
            author_name: 'fearfireg',
            author_email: 'fearfireg@gmail.com'
        },
        total: 5,
        all: [
            {
                hash: '1f9642f15a7e69de1732279acbb132b490669513',
                date: '2016-06-16 22:49:20 -0700',
                message: 'Merge branch \'master\' of https://github.com/gawainBarnickle/qa2 (HEAD, master)',
                author_name: 'fearfireg',
                author_email: 'fearfireg@gmail.com'
            },
            {
                hash: '478e6f80b2b622fd93cac7fcd31b018502811514',
                date: '2016-06-16 22:38:23 -0700',
                message: 'test pull (origin/master)',
                author_name: 'gawainBarnickle',
                author_email: 'gawain.barnickle@gmail.com'
            },
            {
                hash: 'f6d0a3d22f87739dc32312d99233bcda7ffb89e8',
                date: '2016-06-16 15:08:37 -0700',
                message: 'mod qa2',
                author_name: 'fearfireg',
                author_email: 'fearfireg@gmail.com'
            },
            {
                hash: '27b24364355cdd1233429c633e98b1aa285564a3',
                date: '2016-06-15 17:02:52 -0700',
                message: 'added readme and gitignore',
                author_name: 'fearfireg',
                author_email: 'fearfireg@gmail.com'
            },
            {
                hash: 'c2ba5842c0d91f6a623706580ca1ac789be8ca5e',
                date: '2016-06-15 16:52:03 -0700',
                message: 'added pinky and the brain',
                author_name: 'fearfireg',
                author_email: 'fearfireg@gmail.com'
            }
        ]
    }
    ;
router.get('/test', function (req, res, next) {
    res.render('testy', {testArray: [123, 'hello']});

});
router.get('/update', function (req, res, next) {

    var commit = req.query.commit;
    console.log(commit);
    res.render('testUpdate', {commit: commit});

});
router.get('/deploy', function (req, res, next) {
    sg.addRemote('origin', 'https://gawainBarnickle:38ac1908f18591e1615c48549af86660af548811@github.com/gawainBarnickle/qa2.git', function (err, tokensRes) {
        var commit = req.query.commit;
        console.log(commit);
        sg.removeRemote('origin')
        res.render('testDeploy', {commit: commit});
    });
});