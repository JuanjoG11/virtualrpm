const fs = require('fs');
const path = require('path');
const https = require('https');

// --- CONFIGURATION ---
const SUPABASE_URL = 'https://behzsuxortqycipoqwip.supabase.co/storage/v1/object/public/productos/';
const BACKUP_DIR = './backup_images';
// We'll read the products from the products-data.js file content
// But since this is a Node script, we can also just provide a list of folders if we want.
// For simplicity, this script will download images based on the 'products-data.js' structure.
// ----------------------

if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {}); // Delete the file if error
            reject(err);
        });
    });
}

// Since I can't easily parse JS files with complex logic here, 
// I will provide a script that can be adapted or just use the known folders.

console.log('--- VIRTUAL RPM BACKUP TOOL ---');
console.log('Este script descargará las imágenes principales del almacenamiento.');

// This is a placeholder for the actual download logic which would ideally 
// parse the JSON from products-data.js.
// Since I know the structure, I'll provide a more "universal" approach.

const BUCKET_URL = 'https://behzsuxortqycipoqwip.supabase.co/storage/v1/object/public/productos/';

async function runBackup() {
    console.log('Iniciando respaldo...');
    
    // Note: In a real scenario, you'd use the Supabase API to list all files.
    // However, to keep this script zero-dependency (no @supabase/supabase-js),
    // we assume the user knows their folders or we provide the list from the data.
    
    // Example folders found in products-data.js:
    const folders = [
        'universales/maleta-expandible',
        'universales/maleta-alpinestars-lona',
        'universales/maleta-ogio-rigida',
        'universales/pechera-biker',
        'mt15/aro-tapa-tanque',
        'mt15/guardabarro-monobrazo',
        'mt15/guardabarro-monobrazo-lujo',
        'mt15/guardabarro-monobrazo-carbono',
        'mt15/corta-vientos-lujo',
        'mt15/hand-saver-cuadrado',
        'mt15/hand-saver-edition',
        'mt15/hand-saver-3d-carbono',
        'universales/grips-barracuda',
        'universales/spools',
        'mt15/cupula-metalica-nacional',
        'mt15/cupula-metalica-importada',
        'mt15/agarradera-tanque',
        'mt15/protector-mordaza',
        'mt15/tapa-exosto',
        'mt15/guardacadena',
        'mt15/protector-radiador',
        'mt15/protector-acutrax',
        'mt15/protector-bomba-freno',
        'mt15/fender-abatible-hr',
        'mt15/portaplaca',
        'mt15/protector-bomba-freno-delantero',
        'mt15/slider-exosto',
        'mt15/sliders-eje',
        'mt15/protector-regulador',
        'mt15/direccionales-mt',
        'mt15/rejillas-aire',
        'mt15/sliders-motor',
        'mt15/full-system-cromado',
        'duke/aro-tapa-tanque',
        'duke/protector-bomba-freno-delantero',
        'duke/protector-bomba-freno-trasero',
        'duke/lujo-tapas-laterales-radiador',
        'duke/lujo-posapies',
        'duke/protector-acutrax',
        'duke/portaplaca',
        'duke/fender-abatible',
        'duke/protector-radiador',
        'duke/acople-codo-exosto',
        'duke/slider-motor',
        'duke/slider-eje',
        'duke/slider-eje-srp',
        'suzuki/aro-tapa-tanque'
    ];

    for (const folder of folders) {
        const folderPath = path.join(BACKUP_DIR, folder);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        // We try to download 1.jpg to 5.jpg for each folder (standard pattern)
        for (let i = 1; i <= 5; i++) {
            const fileName = `${i}.jpg`;
            const fileUrl = `${BUCKET_URL}${folder}/${fileName}`;
            const dest = path.join(folderPath, fileName);
            
            try {
                process.stdout.write(`Descargando ${folder}/${fileName}... `);
                await downloadFile(fileUrl, dest);
                console.log('✅');
            } catch (e) {
                console.log('❌ (No existe o error)');
            }
        }
    }
    
    console.log('\n--- RESPALDO FINALIZADO ---');
    console.log(`Las imágenes están en: ${path.resolve(BACKUP_DIR)}`);
}

runBackup().catch(console.error);
