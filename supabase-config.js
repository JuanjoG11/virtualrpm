// ============================================
// VIRTUAL RPM - Supabase Configuration
// ============================================
const SUPABASE_PROJECT_URL = 'https://behzsuxortqycipoqwip.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_VWx9NL3d9Sk3FAhKldtfjA_5OlVkcHU';

// Use 'supabaseClient' to avoid conflict with the CDN's global 'supabase' variable
const supabaseClient = window.supabase.createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);

// Storage base URL for public product images
const STORAGE_BASE = `${SUPABASE_PROJECT_URL}/storage/v1/object/public/productos/`;

/**
 * Gets ALL images from a Supabase Storage folder automatically.
 * Files can have ANY name — no need to rename WhatsApp photos.
 * @param {string} folder - e.g. 'mt15/aro-tapa-tanque'
 * @returns {Promise<string[]>} - Array of full image URLs
 */
async function getImagesFromFolder(folder) {
    try {
        const { data, error } = await supabaseClient.storage
            .from('productos')
            .list(folder, {
                limit: 100,
                offset: 0,
                sortBy: { column: 'name', order: 'asc' }
            });

        if (error) {
            console.warn(`❌ Error listando "${folder}":`, error.message);
            return [];
        }

        if (!data || data.length === 0) {
            console.warn(`📂 Carpeta vacía: ${folder}`);
            return [];
        }

        console.log(`📁 Archivos en "${folder}":`, data.map(f => f.name));

        // Only include real image files, ignore system files
        const imageFiles = data.filter(file =>
            file.name && /\.(jpg|jpeg|png|webp|gif)$/i.test(file.name)
        );

        console.log(`🖼️ Imágenes válidas:`, imageFiles.map(f => f.name));

        return imageFiles.map(file => `${STORAGE_BASE}${folder}/${file.name}`);

    } catch (err) {
        console.error('❌ Error en getImagesFromFolder:', err);
        return [];
    }
}
