const fsextra      = require('fs-extra');
const fs           = require('fs');
const make         = process.argv.slice(2)[0];
const name         = process.argv.slice(3)[0];
let maketemplate = false;
switch (make){
    case 'c':
    case 'com':
    case 'component':
        path_copy = './src/assets/scss/components/component';
        source_copy = path_copy+'/_component.scss';
        path = './src/assets/scss/components/'+name+'/';
        rename_source_path = path+'_component.scss';
        source_path = path+name+'.scss';
        fsextra.copy(path_copy, path, function ( err ) {
            if ( err ){
                return console.error(err)
            }
            fs.rename(rename_source_path, source_path, function( err) {
                if ( err ) console.log( 'ERROR: ' + err );
            });
        });
        maketemplate = false;
        break;
}
if(maketemplate == true){
    style_out += "";
    fs.writeFile(out_path, style_out, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}
