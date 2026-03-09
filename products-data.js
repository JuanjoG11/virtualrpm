// Virtual RPM Product Database
const SUPABASE_URL = 'https://behzsuxortqycipoqwip.supabase.co/storage/v1/object/public/productos/';

const products = [
    // Cúpulas
    {
        id: 'cup-001',
        name: 'Cúpula Racing Ahumada',
        category: 'cupulas',
        price: 185000,
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=500&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&h=500&fit=crop'
        ],
        description: 'Cúpula aerodinámica de alto rendimiento, material acrílico de primera calidad',
        featured: true
    },

    {
        id: 'cup-002',
        name: 'Cúpula Touring Transparente',
        category: 'cupulas',
        price: 165000,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=500&fit=crop',
        description: 'Máxima protección para viajes largos, diseño ergonómico'
    },
    {
        id: 'cup-003',
        name: 'Cúpula Deportiva Negra',
        category: 'cupulas',
        price: 195000,
        image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&h=500&fit=crop',
        description: 'Estilo agresivo racing, reducción de turbulencia'
    },

    // Espejos
    {
        id: 'esp-001',
        name: 'Espejos Retrovisores CNC',
        category: 'espejos',
        price: 125000,
        image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&h=500&fit=crop',
        description: 'Espejos mecanizados CNC, acabado premium, visión HD',
        featured: true
    },
    {
        id: 'esp-002',
        name: 'Espejos Deportivos Aluminio',
        category: 'espejos',
        price: 95000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        description: 'Diseño aerodinámico, aluminio anodizado'
    },
    {
        id: 'esp-003',
        name: 'Espejos Plegables Racing',
        category: 'espejos',
        price: 145000,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=500&fit=crop',
        description: 'Sistema plegable, protección en caídas'
    },

    // Maletas
    {
        id: 'mal-001',
        name: 'Maletas Rígidas 33L Par',
        category: 'maletas',
        price: 485000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        description: 'Par de maletas laterales, material ABS, sistema de apertura rápida',
        featured: true
    },
    {
        id: 'mal-002',
        name: 'Baúl Top Case 45L',
        category: 'maletas',
        price: 295000,
        image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&h=500&fit=crop',
        description: 'Capacidad para 2 cascos, resistente al agua'
    },
    {
        id: 'mal-003',
        name: 'Kit Maletas + Baúl',
        category: 'maletas',
        price: 725000,
        image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&h=500&fit=crop',
        description: 'Set completo touring, incluye soportes'
    },

    // Exostos
    {
        id: 'exo-001',
        name: 'Exosto Deportivo Titanio',
        category: 'exostos',
        price: 565000,
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=500&fit=crop',
        description: 'Sonido racing, titanio grado 1, +5HP',
        featured: true
    },
    {
        id: 'exo-002',
        name: 'Exosto Slip-On Carbono',
        category: 'exostos',
        price: 425000,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=500&fit=crop',
        description: 'Fibra de carbono, instalación fácil'
    },
    {
        id: 'exo-003',
        name: 'Sistema Completo Racing',
        category: 'exostos',
        price: 895000,
        image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&h=500&fit=crop',
        description: 'Header + mid pipe + slip-on, máximo rendimiento'
    },

    // Indumentaria
    {
        id: 'ind-001',
        name: 'Guantes Racing Profesional',
        category: 'indumentaria',
        price: 185000,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
        description: 'Protecciones carbono, piel premium, touch screen'
    },
    {
        id: 'ind-002',
        name: 'Chaqueta Moto Textil',
        category: 'indumentaria',
        price: 385000,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
        description: 'Protecciones CE, impermeable, ventilación'
    },
    {
        id: 'ind-003',
        name: 'Botas Racing Pro',
        category: 'indumentaria',
        price: 465000,
        image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&h=500&fit=crop',
        description: 'Protección tobillo, suela antideslizante',
        featured: true
    },

    // Protecciones
    {
        id: 'pro-001',
        name: 'Protectores de Motor',
        category: 'protecciones',
        price: 245000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        description: 'Acero inoxidable, protección total en caídas'
    },
    {
        id: 'pro-002',
        name: 'Slider de Chasis',
        category: 'protecciones',
        price: 165000,
        image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&h=500&fit=crop',
        description: 'Delrin de alta resistencia, fácil instalación'
    },
    {
        id: 'pro-003',
        name: 'Kit Protección Completa',
        category: 'protecciones',
        price: 385000,
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=500&fit=crop',
        description: 'Motor + chasis + palancas, protección 360°'
    },

    // Caballetes
    {
        id: 'cab-001',
        name: 'Caballete Trasero Universal',
        category: 'caballetes',
        price: 145000,
        image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=500&fit=crop',
        description: 'Acero reforzado, ajustable, hasta 300kg'
    },
    {
        id: 'cab-002',
        name: 'Caballete Delantero Racing',
        category: 'caballetes',
        price: 165000,
        image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&h=500&fit=crop',
        description: 'Sistema de horquilla, estabilidad máxima'
    },

    // Stickers
    {
        id: 'sti-001',
        name: 'Kit Stickers Personalizado',
        category: 'stickers',
        price: 85000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
        description: 'Diseño a medida, vinilo premium, UV resistente'
    },
    {
        id: 'sti-002',
        name: 'Calcomanías Racing',
        category: 'stickers',
        price: 65000,
        image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?w=500&h=500&fit=crop',
        description: 'Diseños deportivos, fácil aplicación'
    },

    // ─── YAMAHA MT-15 ───────────────────────────────────────────────────
    {
        id: 'mt15-aro-tapa-001',
        name: 'Aro Tapa Tanque MT-15',
        category: 'accesorios',
        price: 30000,
        image: `${SUPABASE_URL}mt15/aro-tapa-tanque/1.jpg`, // Miniatura del catálogo
        folder: 'mt15/aro-tapa-tanque',  // ← AUTO: detecta TODAS las fotos de esta carpeta
        description: 'Aro decorativo para tapa de tanque Yamaha MT-15. Disponible en Negro y Plateado. Instalación sin herramientas.',
        colors: ['Negro', 'Plateado'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },

    // ─── UNIVERSALES ─────────────────────────────────────────────────────
    {
        id: 'mt15-guardabarro-001',
        name: 'Guardabarro Monobrazo Universal MT-15',
        category: 'accesorios',
        price: 120000,
        image: `${SUPABASE_URL}mt15/guardabarro-monobrazo/1.jpg`,
        folder: 'mt15/guardabarro-monobrazo',
        description: 'Guardabarro monobrazo de alta resistencia para Yamaha MT-15. Instalación sencilla sin modificaciones.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-guardabarro-lujo-001',
        name: 'Guardabarro Monobrazo de Lujo Universal',
        category: 'accesorios',
        price: 140000,
        image: `${SUPABASE_URL}mt15/guardabarro-monobrazo-lujo/1.jpg`,
        folder: 'mt15/guardabarro-monobrazo-lujo',
        description: 'Guardabarro monobrazo diseño de lujo para Yamaha MT-15. Acabados premium y máxima protección.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-guardabarro-carbono-001',
        name: 'Guardabarro Monobrazo Carbono Grande',
        category: 'accesorios',
        price: 145000,
        image: `${SUPABASE_URL}mt15/guardabarro-monobrazo-carbono/1.jpg`,
        folder: 'mt15/guardabarro-monobrazo-carbono',
        description: 'Guardabarro monobrazo versión grande con acabado tipo carbono para Yamaha MT-15. Estilo deportivo y protección extendida.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-cupula-metalica-001',
        name: 'Cúpula Metálica Nacional',
        category: 'cupulas',
        price: 120000,
        image: `${SUPABASE_URL}mt15/cupula-metalica-nacional/1.jpg`,
        folder: 'mt15/cupula-metalica-nacional',
        description: 'Cúpula metálica de fabricación nacional para Yamaha MT-15. Alta resistencia y diseño único deportivo.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-cupula-metalica-importada-001',
        name: 'Cúpula Metálica Importada',
        category: 'cupulas',
        price: 140000,
        image: `${SUPABASE_URL}mt15/cupula-metalica-importada/1.jpg`,
        folder: 'mt15/cupula-metalica-importada',
        description: 'Cúpula metálica importada premium para Yamaha MT-15. Ajuste perfecto, diseño aerodinámico y acabados de altísima calidad.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-agarradera-tanque-001',
        name: 'Agarradera de Tanque Yamaha',
        category: 'accesorios',
        price: 190000,
        image: `${SUPABASE_URL}mt15/agarradera-tanque/1.jpg`,
        folder: 'mt15/agarradera-tanque',
        description: 'Agarradera de tanque deportiva para Yamaha. Facilita el agarre del pasajero y da un look deportivo. Compatible con MT-15.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-protector-mordaza-001',
        name: 'Protector de Mordaza o Caliper',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}mt15/protector-mordaza/1.jpg`,
        folder: 'mt15/protector-mordaza',
        description: 'Protector de mordaza o caliper para Yamaha MT-15. Brinda protección esencial contra impactos y suciedad. Disponible en acabados cromado y negro.',
        colors: ['Cromado', 'Negro'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-tapa-exosto-001',
        name: 'Cubierta Tapa Exosto',
        category: 'exostos',
        price: 80000,
        image: `${SUPABASE_URL}mt15/tapa-exosto/1.jpg`,
        folder: 'mt15/tapa-exosto',
        description: 'Cubierta protectora para tapa de exosto Yamaha MT-15. Diseño resistente al calor y protección anti raspones.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-guardacadena-001',
        name: 'Guardacadena MT15',
        category: 'protecciones',
        price: 85000,
        image: `${SUPABASE_URL}mt15/guardacadena/1.jpg`,
        folder: 'mt15/guardacadena',
        description: 'Guardacadena reforzado para Yamaha MT-15. Protege la cadena y la moto contra salpicaduras y suciedad de la vía.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-protector-radiador-001',
        name: 'Protector de Radiador',
        category: 'protecciones',
        price: 85000,
        image: `${SUPABASE_URL}mt15/protector-radiador/1.jpg`,
        folder: 'mt15/protector-radiador',
        description: 'Protector de radiador indispensable para Yamaha MT-15. Evita daños por piedras y partículas. Disponible en acabados Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-protector-acutrax-001',
        name: 'Protector Acutrax',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}mt15/protector-acutrax/1.jpg`,
        folder: 'mt15/protector-acutrax',
        description: 'Protector Acutrax para Yamaha MT-15. Brinda estilo y protección adicional. Disponible en acabados Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-protector-bomba-freno-001',
        name: 'Protector Bomba Freno Trasero',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}mt15/protector-bomba-freno/1.jpg`,
        folder: 'mt15/protector-bomba-freno',
        description: 'Protector para bomba de freno trasero de Yamaha MT-15. Proporciona seguridad al sistema de frenado con un diseño resistente. Disponible en Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-fender-abatible-hr-001',
        name: 'Fender Abatible HR',
        category: 'accesorios',
        price: 110000,
        image: `${SUPABASE_URL}mt15/fender-abatible-hr/1.jpg`,
        folder: 'mt15/fender-abatible-hr',
        description: 'Fender abatible marca HR para Yamaha MT-15. Diseño deportivo y funcional que permite inclinar la placa.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-portaplaca-001',
        name: 'Portaplaca',
        category: 'accesorios',
        price: 35000,
        image: `${SUPABASE_URL}mt15/portaplaca/1.jpg`,
        folder: 'mt15/portaplaca',
        description: 'Portaplaca metálico resistente y de diseño minimalista para Yamaha MT-15. Ajuste perfecto para placa estándar.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-protector-bomba-freno-delantero-001',
        name: 'Protector Bomba de Freno Delantero',
        category: 'protecciones',
        price: 30000,
        image: `${SUPABASE_URL}mt15/protector-bomba-freno-delantero/1.jpg`,
        folder: 'mt15/protector-bomba-freno-delantero',
        description: 'Protector para bomba de freno delantero de Yamaha MT-15. Máxima protección contra golpes y diseño aerodinámico. Disponible en acabados Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-slider-exosto-001',
        name: 'Slider de Exosto (Con y Sin Tapa)',
        category: 'protecciones',
        price: 70000,
        image: `${SUPABASE_URL}mt15/slider-exosto/1.jpg`,
        folder: 'mt15/slider-exosto',
        description: 'Slider protector de exosto para Yamaha MT-15. Disponible en versiones con tapa y sin tapa. Protege el escape contra caídas.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-sliders-eje-001',
        name: 'Sliders de Eje Par',
        category: 'protecciones',
        price: 65000,
        image: `${SUPABASE_URL}mt15/sliders-eje/1.jpg`,
        folder: 'mt15/sliders-eje',
        description: 'Par de sliders de eje para Yamaha MT-15. Brindan protección esencial a los ejes y tijera en caso de caída o deslizamiento.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-protector-regulador-001',
        name: 'Protector de Regulador',
        category: 'protecciones',
        price: 50000,
        image: `${SUPABASE_URL}mt15/protector-regulador/1.jpg`,
        folder: 'mt15/protector-regulador',
        description: 'Protector de regulador para Yamaha MT-15. Previene daños por impacto y asegura el correcto funcionamiento eléctrico de la moto. Disponible en colores Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-direccionales-mt-001',
        name: 'Direccionales Tipo MT',
        category: 'accesorios',
        price: 95000,
        image: `${SUPABASE_URL}mt15/direccionales-mt/1.jpg`,
        folder: 'mt15/direccionales-mt',
        description: 'Direccionales deportivas tipo MT para Yamaha. Diseño aerodinámico y moderno. Disponibles en versiones con luz Intermitente y Secuencial.',
        colors: ['Intermitente', 'Secuencial'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-rejillas-aire-001',
        name: 'Rejillas de Aire MT15',
        category: 'accesorios',
        price: 70000,
        image: `${SUPABASE_URL}mt15/rejillas-aire/1.jpg`,
        folder: 'mt15/rejillas-aire',
        description: 'Par de rejillas de aire laterales para Yamaha MT-15. Le dan un aspecto más ancho y deportivo a la moto. Múltiples colores disponibles.',
        colors: ['Azul', 'Amarillo', 'Negro', 'Gris', 'Rojo'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-corta-vientos-lujo-001',
        name: 'Corta Vientos de Lujo',
        category: 'accesorios',
        price: 90000,
        image: `${SUPABASE_URL}mt15/corta-vientos-lujo/1.jpg`,
        folder: 'mt15/corta-vientos-lujo',
        description: 'Corta vientos de lujo para manubrio de Yamaha MT-15. Protegen las manos y maniguetas con un diseño aerodinámico y premium.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-hand-saver-cuadrado-001',
        name: 'Hand Saver Cuadrado',
        category: 'accesorios',
        price: 90000,
        image: `${SUPABASE_URL}mt15/hand-saver-cuadrado/1.jpg`,
        folder: 'mt15/hand-saver-cuadrado',
        description: 'Hand saver de diseño cuadrado para Yamaha MT-15. Máxima protección para tus manos y maniguetas con una apariencia robusta.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-hand-saver-edition-001',
        name: 'Hand Saver Edition',
        category: 'accesorios',
        price: 115000,
        image: `${SUPABASE_URL}mt15/hand-saver-edition/1.jpg`,
        folder: 'mt15/hand-saver-edition',
        description: 'Hand Saver Edition premium para Yamaha MT-15. Acabados y diseño superior para los pilotos más exigentes.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-hand-saver-3d-carbono-001',
        name: 'Hand Saver 3D Carbono',
        category: 'accesorios',
        price: 90000,
        image: `${SUPABASE_URL}mt15/hand-saver-3d-carbono/1.jpg`,
        folder: 'mt15/hand-saver-3d-carbono',
        description: 'Hand saver con acabado 3D tipo carbono para Yamaha MT-15. Estilo racing y protección para el piloto.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    }
];

// Brands and Models Database
const motorcycles = [
    {
        id: 'yamaha',
        name: 'YAMAHA',
        logo: 'images/yamaha.jpg',
        models: [
            { id: 'mt03', name: 'MT-03' },
            { id: 'mt07', name: 'MT-07' },
            { id: 'mt09', name: 'MT-09' },
            { id: 'mt15', name: 'MT-15' },
            { id: 'r1', name: 'YZF-R1' },
            { id: 'r6', name: 'YZF-R6' },
            { id: 'nmax', name: 'NMAX' }
        ]
    },
    {
        id: 'kawasaki',
        name: 'KAWASAKI',
        logo: 'images/kawasaki.png',
        models: [
            { id: 'z400', name: 'Z400' },
            { id: 'z900', name: 'Z900' },
            { id: 'ninja400', name: 'Ninja 400' },
            { id: 'zx6r', name: 'ZX-6R' },
            { id: 'versys650', name: 'Versys 650' }
        ]
    },
    {
        id: 'suzuki',
        name: 'SUZUKI',
        logo: 'images/suzuki.jpg',
        models: [
            { id: 'gsxs150', name: 'GSX-S150' },
            { id: 'gsxs750', name: 'GSX-S750' },
            { id: 'vstrom650', name: 'V-Strom 650' },
            { id: 'dr650', name: 'DR650' }
        ]
    },
    {
        id: 'honda',
        name: 'HONDA',
        logo: 'images/honda.png',
        models: [
            { id: 'cb190r', name: 'CB190R' },
            { id: 'cb500x', name: 'CB500X' },
            { id: 'cb650r', name: 'CB650R' },
            { id: 'africatwin', name: 'Africa Twin' }
        ]
    },
    {
        id: 'ktm',
        name: 'KTM',
        logo: 'images/ktm.png',
        models: [
            { id: 'duke200', name: 'Duke 200' },
            { id: 'duke390', name: 'Duke 390' },
            { id: 'rc390', name: 'RC 390' },
            { id: 'adv390', name: '390 Adventure' }
        ]
    },
    {
        id: 'bmw',
        name: 'BMW',
        logo: 'images/bmw.jpg',
        models: [
            { id: 'g310r', name: 'G310R' },
            { id: 'f850gs', name: 'F850GS' },
            { id: 'r1250gs', name: 'R1250GS' },
            { id: 's1000rr', name: 'S1000RR' }
        ]
    }
];

// Category information
const categories = {
    cupulas: { name: 'Cúpulas', icon: '🏍️' },
    espejos: { name: 'Espejos', icon: '🔍' },
    maletas: { name: 'Maletas', icon: '💼' },
    exostos: { name: 'Exostos', icon: '🔥' },
    indumentaria: { name: 'Indumentaria', icon: '🧥' },
    protecciones: { name: 'Protecciones', icon: '🛡️' },
    caballetes: { name: 'Caballetes', icon: '⚙️' },
    stickers: { name: 'Stickers', icon: '✨' },
    accesorios: { name: 'Accesorios', icon: '💎' }
};
