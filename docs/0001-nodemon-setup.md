# NODEMON SETUP

nodemon adalah sebuah utility untuk memonitor perubahan pada source code kita, saat terjadi perubahan, nodemon secara otomatis akan melakukan server restart sehingga restarting tidak akan kita lakukan secara manual lagi.

## IMPLEMENTATION

0.  Instalasi global

        $ npm install -g nodemon

        /home/wandyatmono/.nvm/versions/node/v8.10.0/bin/nodemon -> /home/wandyatmono/.nvm/versions/node/v8.10.0/lib/node_modules/nodemon/bin/nodemon.js

        > nodemon@1.17.3 postinstall /home/wandyatmono/.nvm/versions/node/v8.10.0/lib/node_modules/nodemon
        > node -e "console.log('\u001b[32mLove nodemon? You can now support the project via the open collective:\u001b[22m\u001b[39m\n > \u001b[96m\u001b[1mhttps://opencollective.com/nodemon/donate\u001b[0m\n')" || exit 0

        Love nodemon? You can now support the project via the open collective:
        > https://opencollective.com/nodemon/donate

        npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.2 (node_modules/nodemon/node_modules/fsevents):
        npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

        + nodemon@1.17.3
        added 233 packages in 25.562s

2.	Selesai.

	Mulai sekarang jika akan menjalankan sebuah aplikasi todak perlu lagi menggunakan node secara langsung
    
        $ node <app>
        
    Tetapi dapat dijalankan dengan command:

	    $	nodemon <app>

	Maka 'server-refresh' akan dilakukan secara automatis saat source-code berubah.

3.  Commit

        $ git add .
        $ git commit -m "Nodemon Installed"

