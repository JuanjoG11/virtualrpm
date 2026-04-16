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

    // Maletas (Exclusivas de Indumentaria)
    {
        id: 'uni-maleta-expandible-001',
        name: 'Maleta Rígida Expandible',
        category: 'maletas',
        price: 180000,
        image: `${SUPABASE_URL}universales/maleta-expandible/1.jpg`,
        folder: 'universales/maleta-expandible',
        description: 'Maleta rígida con sistema expandible de alta resistencia. Ideal para viajes largos y uso diario. Selecciona tu marca preferida.',
        variants: [
            { name: 'OGIO' }, { name: 'FOX' }, { name: 'DANIESE ROJA' }, 
            { name: 'DANIESE NEGRA' }, { name: 'DANIESE ROSADA' }, 
            { name: 'ALPINESTAR' }, { name: 'ICON' }
        ],
        compatible_brands: ['indumentaria'],
        compatible_models: ['maletas'],
        featured: true
    },
    {
        id: 'uni-maleta-alpinestars-lona-001',
        name: 'Maleta Alpinestars Lona',
        category: 'maletas',
        price: 120000,
        image: `${SUPABASE_URL}universales/maleta-alpinestars-lona/1.jpg`,
        folder: 'universales/maleta-alpinestars-lona',
        description: 'Maleta de lona Alpinestars de alta durabilidad. Gran capacidad, múltiples compartimentos y diseño ergonómico para moteros.',
        colors: ['Azul', 'Amarilla', 'Blanca'],
        compatible_brands: ['indumentaria'],
        compatible_models: ['maletas'],
        featured: true
    },
    {
        id: 'uni-maleta-ogio-rigida-001',
        name: 'Maleta Rígida Ogio Importada',
        category: 'maletas',
        price: 275000,
        image: `${SUPABASE_URL}universales/maleta-ogio-rigida/1.jpg`,
        folder: 'universales/maleta-ogio-rigida',
        description: 'Maleta rígida OGIO importada de alta gama. Diseño aerodinámico premium, compartimentos especializados y máxima protección para tus pertenencias.',
        compatible_brands: ['indumentaria'],
        compatible_models: ['maletas'],
        featured: true
    },

    // Pecheras (Indumentaria)
    {
        id: 'uni-pechera-biker-001',
        name: 'Pechera Biker Multimarca',
        category: 'pecheras',
        price: 85000,
        image: `${SUPABASE_URL}universales/pechera-biker/1.jpg`,
        folder: 'universales/pechera-biker',
        description: 'Pechera protectora Biker de alta resistencia. Diseño ergonómico, ajustable y multimarca. Máxima protección y comodidad para tus recorridos.',
        compatible_brands: ['indumentaria'],
        compatible_models: ['pecheras'],
        featured: true
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
        description: 'Protecciones carbono, piel premium, touch screen',
        compatible_brands: ['indumentaria'],
        compatible_models: ['guantes']
    },
    {
        id: 'ind-002',
        name: 'Chaqueta Moto Textil',
        category: 'indumentaria',
        price: 385000,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
        description: 'Protecciones CE, impermeable, ventilación',
        compatible_brands: ['indumentaria'],
        compatible_models: ['chaquetas']
    },
    {
        id: 'ind-003',
        name: 'Botas Racing Pro',
        category: 'indumentaria',
        price: 465000,
        image: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&h=500&fit=crop',
        description: 'Protección tobillo, suela antideslizante',
        featured: true,
        compatible_brands: ['indumentaria'],
        compatible_models: ['botas']
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
        id: 'uni-guardabarro-001',
        name: 'Guardabarro Monobrazo Universal',
        category: 'accesorios',
        price: 120000,
        image: `${SUPABASE_URL}mt15/guardabarro-monobrazo/1.jpg`,
        folder: 'mt15/guardabarro-monobrazo',
        description: 'Guardabarro monobrazo de alta resistencia. Instalación sencilla sin modificaciones. Diseño universal compatible con múltiples modelos.',
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-guardabarro-lujo-001',
        name: 'Guardabarro Monobrazo de Lujo Universal',
        category: 'accesorios',
        price: 140000,
        image: `${SUPABASE_URL}mt15/guardabarro-monobrazo-lujo/1.jpg`,
        folder: 'mt15/guardabarro-monobrazo-lujo',
        description: 'Guardabarro monobrazo diseño de lujo. Acabados premium y máxima protección. Diseño universal compatible con múltiples modelos.',
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-guardabarro-carbono-001',
        name: 'Guardabarro Monobrazo Carbono Grande',
        category: 'accesorios',
        price: 145000,
        image: `${SUPABASE_URL}mt15/guardabarro-monobrazo-carbono/1.jpg`,
        folder: 'mt15/guardabarro-monobrazo-carbono',
        description: 'Guardabarro monobrazo versión grande con acabado tipo carbono. Estilo deportivo y protección extendida. Compatible con múltiples modelos.',
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-corta-vientos-lujo-001',
        name: 'Corta Vientos de Lujo',
        category: 'accesorios',
        price: 90000,
        image: `${SUPABASE_URL}mt15/corta-vientos-lujo/1.jpg`,
        folder: 'mt15/corta-vientos-lujo',
        description: 'Corta vientos de lujo para manubrio. Protegen las manos y maniguetas con un diseño aerodinámico y premium. Universal para varios modelos.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-hand-saver-cuadrado-001',
        name: 'Hand Saver Cuadrado',
        category: 'accesorios',
        price: 90000,
        image: `${SUPABASE_URL}mt15/hand-saver-cuadrado/1.jpg`,
        folder: 'mt15/hand-saver-cuadrado',
        description: 'Hand saver de diseño cuadrado. Máxima protección para tus manos y maniguetas con una apariencia robusta. Compatibilidad universal.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-hand-saver-edition-001',
        name: 'Hand Saver Edition',
        category: 'accesorios',
        price: 115000,
        image: `${SUPABASE_URL}mt15/hand-saver-edition/1.jpg`,
        folder: 'mt15/hand-saver-edition',
        description: 'Hand Saver Edition premium. Acabados y diseño superior para los pilotos más exigentes. Compatibilidad universal para múltiples referencias.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-hand-saver-3d-carbono-001',
        name: 'Hand Saver 3D Carbono',
        category: 'accesorios',
        price: 90000,
        image: `${SUPABASE_URL}mt15/hand-saver-3d-carbono/1.jpg`,
        folder: 'mt15/hand-saver-3d-carbono',
        description: 'Hand saver con acabado 3D tipo carbono. Estilo racing y protección para el piloto. Diseño universal adaptable.',
        colors: ['Negro', 'Plata', 'Gris Titanio', 'Rojo', 'Azul', 'Verde', 'Naranja', 'Dorado', 'Tornasol'],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-grips-barracuda-001',
        name: 'Grips Barracuda Aluminio',
        category: 'accesorios',
        price: 45000,
        image: `${SUPABASE_URL}universales/grips-barracuda/1.jpg`,
        folder: 'universales/grips-barracuda',
        description: 'Grips marca Barracuda fabricados en aluminio de alta calidad. Mejoran el agarre y la estética del manubrio. Compatibilidad universal para todas las motos.',
        colors: ['Azul', 'Rojo', 'Negro', 'Naranja', 'Verde', 'Plateado', 'Titanio', 'Morado', 'Tornasol', 'Dorado'],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-spools-001',
        name: 'Spools',
        category: 'protecciones',
        price: 55000,
        image: `${SUPABASE_URL}universales/spools/1.jpg`,
        folder: 'universales/spools',
        description: 'Spools protectores y funcionales para soporte de caballete trasero. Fabricados en aluminio CNC de alta calidad. Disponibles en varios colores.',
        colors: ['Rojo', 'Verde', 'Azul', 'Naranja', 'Plata', 'Negro', 'Dorado'],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        excluded_models: ['ns200', 'dominar400'], // Excluidos NS y Dominar
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
        id: 'mt15-sliders-motor-001',
        name: 'Sliders de Motor',
        category: 'protecciones',
        price: 235000,
        image: `${SUPABASE_URL}mt15/sliders-motor/1.jpg`,
        folder: 'mt15/sliders-motor',
        description: 'Sliders de motor para Yamaha MT-15. Máxima protección para el motor en caso de caída o deslizamiento.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },
    {
        id: 'mt15-full-system-001',
        name: 'Full System MT15',
        category: 'exostos',
        price: 460000,
        image: `${SUPABASE_URL}mt15/full-system-cromado/1.jpg`,
        folder: 'mt15/full-system-cromado',
        description: 'Sistema completo (Full System) para Yamaha MT-15. Mejora el rendimiento y el sonido. Selecciona el acabado para ver el precio.',
        colors: [
            { name: 'Tornasol', price: 520000 },
            { name: 'Cromado', price: 460000 }
        ],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt15'],
        featured: true
    },

    // ─── KTM DUKE 200 / 390 NG ──────────────────────────────────────────
    {
        id: 'ktm-aro-tapa-001',
        name: 'Aro Tapa Tanque KTM',
        category: 'accesorios',
        price: 30000,
        image: `${SUPABASE_URL}duke/aro-tapa-tanque/1.jpg`,
        folder: 'duke/aro-tapa-tanque',
        description: 'Aro decorativo para tapa de tanque KTM. Disponible en Negro, Plateado y Naranja. Instalación sencilla y ajuste perfecto.',
        colors: ['Negro', 'Plateado', 'Naranja'],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390', 'rc390', 'adv390'],
        featured: true
    },
    {
        id: 'duke-protector-bomba-freno-delantero-001',
        name: 'Protector Bomba Freno Delantero',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}duke/protector-bomba-freno-delantero/1.jpg`,
        folder: 'duke/protector-bomba-freno-delantero',
        description: 'Protector para bomba de freno delantero para KTM Duke 200 y 390 NG. Protege el sistema de frenado y mejora el estilo de la moto.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-protector-bomba-freno-trasero-001',
        name: 'Protector Bomba Freno Trasero',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}duke/protector-bomba-freno-trasero/1.jpg`,
        folder: 'duke/protector-bomba-freno-trasero',
        description: 'Protector para bomba de freno trasero para KTM Duke 200 y 390 NG. Mayor seguridad y protección contra impactos.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-tapas-laterales-radiador-001',
        name: 'Lujo Tapa Laterales Radiador',
        category: 'accesorios',
        price: 85000,
        image: `${SUPABASE_URL}duke/lujo-tapas-laterales-radiador/1.jpg`,
        folder: 'duke/lujo-tapas-laterales-radiador',
        description: 'Tapas laterales de radiador de lujo para KTM Duke 200 y 390 NG. Añade un toque exclusivo y agresivo al diseño general de la moto.',
        colors: ['Negro', 'Naranja'],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-lujo-posapies-001',
        name: 'Lujo Posapies',
        category: 'accesorios',
        price: 95000,
        image: `${SUPABASE_URL}duke/lujo-posapies/1.jpg`,
        folder: 'duke/lujo-posapies',
        description: 'Posapies de lujo para KTM Duke 200 y 390 NG. Diseño deportivo y acabado premium.',
        colors: ['Negro', 'Naranja'],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-protector-acutrax-001',
        name: 'Protector Acutrax',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}duke/protector-acutrax/1.jpg`,
        folder: 'duke/protector-acutrax',
        description: 'Protector Acutrax para KTM Duke 200 y 390 NG. Brinda estilo y protección adicional.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-portaplaca-001',
        name: 'Portaplaca',
        category: 'accesorios',
        price: 35000,
        image: `${SUPABASE_URL}duke/portaplaca/1.jpg`,
        folder: 'duke/portaplaca',
        description: 'Portaplaca resistente y de diseño minimalista para KTM Duke 200 y 390 NG. Ajuste perfecto para placa estándar.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-fender-abatible-001',
        name: 'Fender Eliminator Abatible',
        category: 'accesorios',
        price: 115000,
        image: `${SUPABASE_URL}duke/fender-abatible/1.jpg`,
        folder: 'duke/fender-abatible',
        description: 'Fender eliminator abatible deportivo para KTM Duke 200 y 390 NG. Permite inclinar la placa y mejora la estética trasera.',
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-protector-radiador-001',
        name: 'Protector de Radiador KTM 200 - 390 NG',
        category: 'protecciones',
        price: 80000,
        image: `${SUPABASE_URL}duke/protector-radiador/1.jpg`,
        folder: 'duke/protector-radiador',
        description: 'Protector de radiador para KTM Duke 200 y 390 NG. Selecciona el color para ver el precio.',
        colors: [
            { name: 'Cromado', price: 80000 },
            { name: 'Negro', price: 90000 },
            { name: 'Naranja', price: 90000 }
        ],
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-acople-codo-exosto-001',
        name: 'Acople Codo Exosto',
        category: 'exostos',
        price: 150000,
        image: `${SUPABASE_URL}duke/acople-codo-exosto/1.jpg`,
        folder: 'duke/acople-codo-exosto',
        description: 'Acople codo de exosto exclusivo para KTM Duke 390 NG. Optimiza el flujo y sonido.',
        compatible_brands: ['ktm'],
        compatible_models: ['duke390'],
        featured: true
    },
    {
        id: 'duke-slider-motor-001',
        name: 'Slider de Motor',
        category: 'protecciones',
        price: 200000,
        image: `${SUPABASE_URL}duke/slider-motor/1.jpg`,
        folder: 'duke/slider-motor',
        description: 'Sliders de motor de alta resistencia para KTM Duke 200 y 390 NG. Brindan protección superior al chasis y motor ante caídas.',
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-slider-eje-001',
        name: 'Slider de Eje KTM (Par)',
        category: 'protecciones',
        price: 65000,
        image: `${SUPABASE_URL}duke/slider-eje/1.jpg`,
        folder: 'duke/slider-eje',
        description: 'Par de sliders de eje para KTM Duke. Protegen las barras y el basculante en caso de caída o arrastre.',
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    {
        id: 'duke-slider-eje-srp-001',
        name: 'Slider de Eje SRP KTM',
        category: 'protecciones',
        price: 55000,
        image: `${SUPABASE_URL}duke/slider-eje-srp/1.jpg`,
        folder: 'duke/slider-eje-srp',
        description: 'Slider de eje marca SRP para KTM Duke. Diseño aerodinámico y alta resistencia para protección en caídas.',
        compatible_brands: ['ktm'],
        compatible_models: ['duke200', 'duke390'],
        featured: true
    },
    // ─── SUZUKI GIXXER 150 / 250 ───────────────────────────────────────
    {
        id: 'suzuki-aro-tapa-001',
        name: 'Aro Tapa Tanque Gixxer',
        category: 'accesorios',
        price: 30000,
        image: `${SUPABASE_URL}suzuki/aro-tapa-tanque/1.jpg`,
        folder: 'suzuki/aro-tapa-tanque',
        description: 'Aro decorativo para tapa de tanque Suzuki Gixxer. Disponible en Negro y Plateado. Ajuste perfecto para modelos 150 y 250.',
        colors: ['Negro', 'Plateado'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-protector-radiador-001',
        name: 'Protector de Radiador Gixxer 250',
        category: 'protecciones',
        price: 85000,
        image: `${SUPABASE_URL}suzuki/protector-radiador-gixxer250/1.jpg`,
        folder: 'suzuki/protector-radiador-gixxer250',
        description: 'Protector de radiador de alta resistencia para Suzuki Gixxer 250. Evita daños por impactos y mejora la estética.',
        colors: ['Negro', 'Plata'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-pechera-001',
        name: 'Quilla o Pechera Metálica para Gixxer',
        category: 'protecciones',
        price: 170000,
        image: `${SUPABASE_URL}suzuki/pechera-metalica/1.jpg`,
        folder: 'suzuki/pechera-metalica',
        description: 'Quilla o pechera metálica reforzada para Suzuki Gixxer. Proporciona protección adicional al motor y mejora la estética de la moto.',
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-slider-motor-001',
        name: 'Slider de Motor Gixxer 250 Naked',
        category: 'protecciones',
        price: 200000,
        image: `${SUPABASE_URL}suzuki/slider-motor-gixxer250/1.jpg`,
        folder: 'suzuki/slider-motor-gixxer250',
        description: 'Slider de motor de alta resistencia diseñado específicamente para Suzuki Gixxer 250 Naked. Brinda protección superior al chasis y motor ante caídas.',
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-agarradera-tanque-001',
        name: 'Agarradera de Tanque Suzuki',
        category: 'accesorios',
        price: 190000,
        image: `${SUPABASE_URL}suzuki/agarradera-tanque/1.jpg`,
        folder: 'suzuki/agarradera-tanque',
        description: 'Agarradera de tanque deportiva para Suzuki. Facilita el agarre del pasajero y da un look deportivo. Compatible con modelos Gixxer 150 y 250.',
        colors: ['Negro', 'Azul', 'Titanio'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-protector-bomba-freno-001',
        name: 'Protector de Bomba Freno Delantero Gixxer',
        category: 'protecciones',
        price: 30000,
        image: `${SUPABASE_URL}suzuki/protector-bomba-freno/1.jpg`,
        folder: 'suzuki/protector-bomba-freno',
        description: 'Protector de bomba de freno delantero para Suzuki Gixxer. Protege tu sistema de frenos en caídas. Disponible en Negro y Plateado.',
        colors: ['Negro', 'Plateado'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-protector-acutrax-001',
        name: 'Protector Acutrax Gixxer 250',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}suzuki/protector-acutrax/1.jpg`,
        folder: 'suzuki/protector-acutrax',
        description: 'Protector Acutrax para Suzuki Gixxer 250. Brinda estilo y protección adicional. Disponible en acabados Negro y Plata.',
        colors: ['Negro', 'Plata'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-cupula-metalica-001',
        name: 'Cúpula Metálica Gixxer',
        category: 'cupulas',
        price: 110000,
        image: `${SUPABASE_URL}suzuki/cupula-metalica/1.jpg`,
        folder: 'suzuki/cupula-metalica',
        description: 'Cúpula metálica deportiva para Suzuki Gixxer. Proporciona protección aerodinámica y un diseño agresivo. Disponible en Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-protector-bomba-freno-trasero-001',
        name: 'Protector Bomba Freno Trasero Gixxer',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}suzuki/protector-bomba-freno-trasero/1.jpg`,
        folder: 'suzuki/protector-bomba-freno-trasero',
        description: 'Protector para bomba de freno trasero de Suzuki Gixxer. Proporciona seguridad al sistema de frenado con un diseño resistente. Disponible en Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-stomp-grips-001',
        name: 'Stomp Grips Gixxer',
        category: 'accesorios',
        price: 50000,
        image: `${SUPABASE_URL}suzuki/stomp-grips/1.jpg`,
        folder: 'suzuki/stomp-grips',
        description: 'Stomp grips para tanque de Suzuki Gixxer. Proporcionan mayor agarre y protección. Selecciona la opción que prefieras.',
        variants: [
            { name: 'Kit Completo', price: 110000 },
            { name: 'Laterales', price: 65000 },
            { name: 'Central', price: 50000 }
        ],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-portaplaca-001',
        name: 'Porta Placa Suzuki',
        category: 'accesorios',
        price: 35000,
        image: `${SUPABASE_URL}suzuki/portaplaca/1.jpg`,
        folder: 'suzuki/portaplaca',
        description: 'Portaplaca resistente y de diseño minimalista para Suzuki Gixxer. Ajuste perfecto para placa estándar. Disponible en Negro y Cromo.',
        colors: ['Negro', 'Cromo'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-fender-abatible-001',
        name: 'Fender Eliminator Abatible Gixxer',
        category: 'accesorios',
        price: 110000,
        image: `${SUPABASE_URL}suzuki/fender-abatible/1.jpg`,
        folder: 'suzuki/fender-abatible',
        description: 'Fender eliminator abatible deportivo para Suzuki Gixxer. Permite inclinar la placa y mejora la estética trasera. Compatible con modelos 150 y 250.',
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-guardacadena-001',
        name: 'Guardacadena Gixxer',
        category: 'protecciones',
        price: 80000,
        image: `${SUPABASE_URL}suzuki/guardacadena/1.jpg`,
        folder: 'suzuki/guardacadena',
        description: 'Guardacadena reforzado para Suzuki Gixxer. Protege la cadena y la moto contra salpicaduras y suciedad. Disponible en Negro y Cromo.',
        colors: ['Negro', 'Cromo'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-stop-integrado-001',
        name: 'Stop Integrado Gixxer FI',
        category: 'accesorios',
        price: 270000,
        image: `${SUPABASE_URL}suzuki/stop-integrado/1.jpg`,
        folder: 'suzuki/stop-integrado',
        description: 'Stop integrado para Suzuki Gixxer FI. Diseño compacto y deportivo que combina luz de freno y direccionales en una sola pieza.',
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-protector-filtro-aceite-001',
        name: 'Protector Tapa Filtro Aceite Suzuki',
        category: 'protecciones',
        price: 25000,
        image: `${SUPABASE_URL}suzuki/protector-filtro-aceite/1.jpg`,
        folder: 'suzuki/protector-filtro-aceite',
        description: 'Protector para tapa de filtro de aceite Suzuki Gixxer. Protege contra golpes e impactos. Disponible en Negro y Cromo.',
        colors: ['Negro', 'Cromo'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-estabilizador-gixxer150-001',
        name: 'Estabilizador de Barras Gixxer 150',
        category: 'accesorios',
        price: 120000,
        image: `${SUPABASE_URL}suzuki/estabilizador-barras/1.jpg`,
        folder: 'suzuki/estabilizador-barras',
        description: 'Estabilizador de barras para Suzuki Gixxer 150. Mejora la estabilidad y el control de la dirección en altas velocidades y curvas. Disponible en Negro y Cromo.',
        colors: ['Negro', 'Cromo'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150'],
        featured: true
    },
    {
        id: 'suzuki-tapa-arranque-gixxer250-001',
        name: 'Tapa Lujo Arranque Gixxer 250',
        category: 'accesorios',
        price: 28000,
        image: `${SUPABASE_URL}suzuki/tapa-arranque-lujo/1.jpg`,
        folder: 'suzuki/tapa-arranque-lujo',
        description: 'Tapa de lujo para motor de arranque para Suzuki Gixxer 250. Mejora la estética y el acabado del motor con un diseño premium. Ajuste perfecto original.',
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-protector-mordaza-001',
        name: 'Protector Mordaza o Caliper Gixxer',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}suzuki/protector-mordaza/1.jpg`,
        folder: 'suzuki/protector-mordaza',
        description: 'Protector de mordaza o caliper para Suzuki Gixxer. Brinda protección contra impactos y suciedad, manteniendo el sistema de frenos seguro. Disponible en Negro y Cromo.',
        colors: ['Negro', 'Cromo'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'suzuki-maniguetas-abatibles-001',
        name: 'Maniguetas Abatibles Gixxer',
        category: 'accesorios',
        price: 170000,
        image: `${SUPABASE_URL}suzuki/maniguetas-abatibles/1.jpg`,
        folder: 'suzuki/maniguetas-abatibles',
        description: 'Maniguetas abatibles y ajustables para Suzuki Gixxer. Diseño deportivo y ergonómico que brinda mayor seguridad y confort al piloto. Disponibles en Negra y Gris.',
        colors: ['Negra', 'Gris'],
        compatible_brands: ['suzuki'],
        compatible_models: ['gixxer150', 'gixxer250'],
        featured: true
    },
    {
        id: 'uni-espejos-stealth-max-001',
        name: 'Espejos Stealth Max Naked',
        category: 'espejos',
        price: 140000,
        image: `${SUPABASE_URL}universales/espejos-stealth-max/1.jpg`,
        folder: 'universales/espejos-stealth-max',
        description: 'Espejos Stealth Max aerodinámicos para motos Naked. Inspirados en el estilo racing para un look agresivo y deportivo. Brindan una visión optimizada y un ajuste perfecto. Compatibilidad universal.',
        colors: [
            { name: 'Negros', price: 140000 },
            { name: 'Plata', price: 150000 },
            { name: 'Tornasol', price: 150000 }
        ],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-espejos-rizoma-5puntas-001',
        name: 'Espejos Rizoma 5 Puntas',
        category: 'espejos',
        price: 85000,
        image: `${SUPABASE_URL}universales/espejos-rizoma-5puntas/1.jpg`,
        folder: 'universales/espejos-rizoma-5puntas',
        description: 'Espejos deportivos de diseño Rizoma 5 puntas. Estilo agresivo y visibilidad HD. Disponibles en una gran variedad de colores para combinar perfectamente con tu moto. Compatibilidad universal.',
        colors: ['Morado', 'Dorado', 'Tornasol', 'Negro', 'Azul', 'Rojo', 'Naranja'],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'uni-espejos-aleron-plano-001',
        name: 'Espejos Alerón Plano',
        category: 'espejos',
        price: 110000,
        image: `${SUPABASE_URL}universales/espejos-aleron-plano/1.jpg`,
        folder: 'universales/espejos-aleron-plano',
        description: 'Espejos con diseño de Alerón Plano Aerodinámico. Estilo minimalista y de vanguardia para tu moto. Brindan una estética única y una excelente visibilidad. Compatibilidad universal.',
        colors: [
            { name: 'Negro', price: 110000 },
            { name: 'Carbono', price: 125000 }
        ],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'bajaj-agarradera-tanque-001',
        name: 'Agarradera de Tanque Bajaj',
        category: 'accesorios',
        price: 170000,
        image: `${SUPABASE_URL}bajaj/agarradera-tanque/1.jpg`,
        folder: 'bajaj/agarradera-tanque',
        description: 'Agarradera de tanque ergonómica para Bajaj. Brinda seguridad al pasajero y un aspecto deportivo. Fabricada en aluminio de alta resistencia.',
        colors: ['Plateada', 'Negra', 'Tornasol', 'Morada'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'dominar400', 'ns400', 'pulsar160'],
        featured: true
    },
    {
        id: 'uni-cupula-doble-burbuja-tornasol',
        name: 'Cúpula Doble Burbuja Tornasol',
        category: 'cupulas',
        price: 160000,
        image: `${SUPABASE_URL}bajaj/cupula-doble-burbuja/1.jpg`,
        folder: 'bajaj/cupula-doble-burbuja',
        description: 'Cúpula doble burbuja con acabado tornasol premium. Mejora la aerodinámica y le da un aspecto agresivo y colorido a tu moto.',
        variants: [
            { name: 'SIN BASES', price: 160000 },
            { name: 'CON BASES', price: 190000 }
        ],
        compatible_brands: ['bajaj', 'suzuki', 'tvs'],
        compatible_models: ['ns200', 'dominar400', 'ns400', 'ns160', 'gixxersf', 'apache'],
        featured: true
    },
    {
        id: 'uni-cupula-doble-burbuja-traslucida',
        name: 'Cúpula Doble Burbuja Tornasol Traslúcida',
        category: 'cupulas',
        price: 160000,
        image: `${SUPABASE_URL}bajaj/cupula-doble-burbuja-traslucida/1.jpg`,
        folder: 'bajaj/cupula-doble-burbuja-traslucida',
        description: 'Cúpula doble burbuja con acabado tornasol traslúcido. Permite una visibilidad clara manteniendo un estilo tornasol vibrante.',
        variants: [
            { name: 'SIN BASES', price: 160000 },
            { name: 'CON BASES', price: 190000 }
        ],
        compatible_brands: ['bajaj', 'suzuki', 'tvs'],
        compatible_models: ['ns200', 'dominar400', 'ns400', 'ns160', 'gixxersf', 'apache'],
        featured: true
    },
    {
        id: 'uni-cupula-doble-burbuja-plateada',
        name: 'Cúpula Doble Burbuja Plateada',
        category: 'cupulas',
        price: 160000,
        image: `${SUPABASE_URL}bajaj/cupula-doble-burbuja-plateada/1.jpg`,
        folder: 'bajaj/cupula-doble-burbuja-plateada',
        description: 'Cúpula doble burbuja con acabado plateado espejado. Ofrece una estética futurista y una excelente protección contra el viento.',
        variants: [
            { name: 'SIN BASES', price: 160000 },
            { name: 'CON BASES', price: 190000 }
        ],
        compatible_brands: ['bajaj', 'suzuki', 'tvs'],
        compatible_models: ['ns200', 'dominar400', 'ns400', 'ns160', 'gixxersf', 'apache'],
        featured: true
    },
    {
        id: 'uni-cupula-doble-burbuja-humo',
        name: 'Cúpula Doble Burbuja Humo',
        category: 'cupulas',
        price: 130000,
        image: `${SUPABASE_URL}bajaj/cupula-doble-burbuja-humo/1.jpg`,
        folder: 'bajaj/cupula-doble-burbuja-humo',
        description: 'Cúpula doble burbuja en acabado humo clásico. Combina protección aerodinámica con un toque sobrio y elegante.',
        variants: [
            { name: 'SIN BASES', price: 130000 },
            { name: 'CON BASES', price: 165000 }
        ],
        compatible_brands: ['bajaj', 'suzuki', 'tvs'],
        compatible_models: ['ns200', 'dominar400', 'ns400', 'ns160', 'gixxersf', 'apache'],
        featured: true
    },
    {
        id: 'uni-cupula-doble-burbuja-carbono',
        name: 'Cúpula Doble Burbuja Carbono',
        category: 'cupulas',
        price: 160000,
        image: `${SUPABASE_URL}bajaj/cupula-doble-burbuja-carbono/1.jpg`,
        folder: 'bajaj/cupula-doble-burbuja-carbono',
        description: 'Cúpula doble burbuja con acabado tipo fibra de carbono. El look más deportivo y ligero para tu moto.',
        variants: [
            { name: 'SIN BASES', price: 160000 },
            { name: 'CON BASES', price: 190000 }
        ],
        compatible_brands: ['bajaj', 'suzuki', 'tvs'],
        compatible_models: ['ns200', 'dominar400', 'ns400', 'ns160', 'gixxersf', 'apache'],
        featured: true
    },
    {
        id: 'uni-cupula-doble-burbuja-negra',
        name: 'Cúpula Doble Burbuja Negra',
        category: 'cupulas',
        price: 130000,
        image: `${SUPABASE_URL}bajaj/cupula-doble-burbuja-negra/1.jpg`,
        folder: 'bajaj/cupula-doble-burbuja-negra',
        description: 'Cúpula doble burbuja en acabado negro sólido. Un look clásico y agresivo que combina con cualquier color de moto.',
        variants: [
            { name: 'SIN BASES', price: 130000 },
            { name: 'CON BASES', price: 165000 }
        ],
        compatible_brands: ['bajaj', 'suzuki', 'tvs'],
        compatible_models: ['ns200', 'dominar400', 'ns400', 'ns160', 'gixxersf', 'apache'],
        featured: true
    },
    {
        id: 'bajaj-stop-integrado-ns',
        name: 'Stop Integrado Tipo Panal NS 200 / NS 400',
        category: 'accesorios',
        price: 130000,
        image: `${SUPABASE_URL}bajaj/stop-integrado-ns/1.jpg`,
        folder: 'bajaj/stop-integrado-ns',
        description: 'Stop integrado con direccionales para Bajaj Pulsar NS 200 y NS 400. Mejora la visibilidad y estética trasera de tu moto.',
        colors: ['Rojo', 'Azul', 'Blanco'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns400'],
        featured: true
    },
    {
        id: 'bajaj-stop-integrado-escalera-ns',
        name: 'Stop Integrado Tipo Escalera NS 200 / NS 400',
        category: 'accesorios',
        price: 130000,
        image: `${SUPABASE_URL}bajaj/stop-integrado-escalera-ns/1.jpg`,
        folder: 'bajaj/stop-integrado-escalera-ns',
        description: 'Stop integrado con diseño tipo escalera y direccionales para Pulsar NS 200 y NS 400. Un estilo único y moderno.',
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns400'],
        featured: true
    },
    {
        id: 'bajaj-stomp-grips-ns200',
        name: 'Kit Stomp Grips NS 200',
        category: 'accesorios',
        price: 110000,
        image: `${SUPABASE_URL}bajaj/stomp-grips-ns200/1.jpg`,
        folder: 'bajaj/stomp-grips-ns200',
        description: 'Kit de grips laterales para tanque (Stomp Grips) diseñados específicamente para Pulsar NS 200. Mejoran el agarre de las piernas al frenar y curvear.',
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-aro-tapa-tanque-ns200',
        name: 'Aro Tapa Tanque NS 200',
        category: 'accesorios',
        price: 30000,
        image: `${SUPABASE_URL}bajaj/aro-tapa-tanque-ns200/1.jpg`,
        folder: 'bajaj/aro-tapa-tanque-ns200',
        description: 'Aro decorativo para la tapa del tanque de Pulsar NS 200. Disponible en acabados plateado y negro.',
        colors: ['Plateado', 'Negro'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-farola-led-ns',
        name: 'Farola LED NS 200 / NS 160',
        category: 'accesorios',
        price: 300000,
        image: `${SUPABASE_URL}bajaj/farola-led-ns/1.jpg`,
        folder: 'bajaj/farola-led-ns',
        description: 'Farola LED de alta potencia para Bajaj Pulsar NS 200 y NS 160. Mejora drásticamente la visibilidad nocturna y le da un aspecto moderno a tu moto.',
        variants: [
            { name: 'SIN DIRECCIONALES', price: 300000 },
            { name: 'CON DIRECCIONALES', price: 330000 }
        ],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns160'],
        featured: true
    },
    {
        id: 'bajaj-protector-lateral-radiador-ns200',
        name: 'Protector Lateral de Radiador NS 200',
        category: 'protecciones',
        price: 45000,
        image: `${SUPABASE_URL}bajaj/protector-lateral-radiador-ns200/1.jpg`,
        folder: 'bajaj/protector-lateral-radiador-ns200',
        description: 'Protector lateral reforzado para el radiador de Pulsar NS 200. Brinda protección contra impactos y un estilo robusto.',
        colors: ['Plata', 'Negro'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-guardacadena-ns200',
        name: 'Guardacadena NS 200',
        category: 'protecciones',
        price: 85000,
        image: `${SUPABASE_URL}bajaj/guardacadena-ns200/1.jpg`,
        folder: 'bajaj/guardacadena-ns200',
        description: 'Guardacadena de alta calidad para Bajaj Pulsar NS 200. Protege la cadena y mejora la estética lateral de la moto.',
        colors: ['Cromado', 'Negro'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-slider-motor-alto-impacto-ns200',
        name: 'Slider de Motor Alto Impacto NS 200',
        category: 'protecciones',
        price: 200000,
        image: `${SUPABASE_URL}bajaj/slider-motor-alto-impacto-ns200/1.jpg`,
        folder: 'bajaj/slider-motor-alto-impacto-ns200',
        description: 'Slider de motor de alto impacto diseñado para proteger la integridad de tu moto en caídas. Fabricado con materiales de absorción de energía.',
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-protector-bomba-freno-trasero-ns200',
        name: 'Protector Bomba de Freno Trasero NS 200',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}bajaj/protector-bomba-freno-trasero-ns200/1.jpg`,
        folder: 'bajaj/protector-bomba-freno-trasero-ns200',
        description: 'Protector de bomba de freno trasero para Bajaj Pulsar NS 200. Añade protección al sistema de frenado ante impactos y suciedad. Disponible en acabado Cromado y Negro.',
        colors: ['Cromado', 'Negro'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-protector-bomba-freno-delantero-ns200',
        name: 'Protector Bomba de Freno Delantero NS 200',
        category: 'protecciones',
        price: 30000,
        image: `${SUPABASE_URL}bajaj/protector-bomba-freno-delantero-ns200/1.jpg`,
        folder: 'bajaj/protector-bomba-freno-delantero-ns200',
        description: 'Protector para bomba de freno delantero de Bajaj Pulsar NS 200. Máxima protección contra golpes y diseño aerodinámico. Disponible en acabado Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-slider-eje-pulsar-ns',
        name: 'Slider de Eje Pulsar NS',
        category: 'protecciones',
        price: 65000,
        image: `${SUPABASE_URL}bajaj/slider-eje-pulsar-ns/1.jpg`,
        folder: 'bajaj/slider-eje-pulsar-ns',
        description: 'Par de sliders de eje para Bajaj Pulsar NS. Brindan protección esencial a los ejes y tijera en caso de caída o deslizamiento.',
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns160', 'ns400'],
        featured: true
    },
    {
        id: 'uni-maniguetas-abatibles-001',
        name: 'Maniguetas Abatibles',
        category: 'accesorios',
        price: 170000,
        image: `${SUPABASE_URL}universales/maniguetas-abatibles/1.jpg`,
        folder: 'universales/maniguetas-abatibles',
        description: 'Maniguetas abatibles y ajustables de alta calidad. Mejoran la ergonomía al conducir y están diseñadas para no romperse en caso de caída.',
        compatible_brands: ['ktm', 'bajaj'],
        compatible_models: ['duke200', 'duke390', 'rc390', 'adv390', 'ns200', 'ns160', 'ns400', 'dominar400'],
        featured: true
    },
    {
        id: 'bajaj-protector-radiador-ns200',
        name: 'Protector de Radiador NS 200',
        category: 'protecciones',
        price: 85000,
        image: `${SUPABASE_URL}bajaj/protector-radiador-ns200/1.jpg`,
        folder: 'bajaj/protector-radiador-ns200',
        description: 'Protector de radiador para Bajaj Pulsar NS 200. Ideal para evitar daños al radiador por piedras o partículas del camino.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-portaplaca-ns200',
        name: 'Portaplaca NS 200',
        category: 'accesorios',
        price: 35000,
        image: `${SUPABASE_URL}bajaj/portaplaca-ns200/1.jpg`,
        folder: 'bajaj/portaplaca-ns200',
        description: 'Portaplaca metálico resistente y con diseño exclusivo para Bajaj Pulsar NS 200. Ajuste perfecto. Disponible en acabados Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-lujo-rejillas-laterales-pulsar',
        name: 'Lujo Rejillas Laterales Pulsar',
        category: 'accesorios',
        price: 50000,
        image: `${SUPABASE_URL}bajaj/lujo-rejillas-laterales-pulsar/1.jpg`,
        folder: 'bajaj/lujo-rejillas-laterales-pulsar',
        description: 'Rejillas laterales de lujo para Bajaj Pulsar. Mejoran la estética lateral de la moto brindando un toque deportivo inigualable. Disponibles en acabados Negro y Cromado.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns160', 'ns400'],
        featured: true
    },
    {
        id: 'bajaj-estabilizador-barras-acero-ns',
        name: 'Estabilizador de Barras en Acero',
        category: 'accesorios',
        price: 120000,
        image: `${SUPABASE_URL}bajaj/estabilizador-barras-acero-ns/1.jpg`,
        folder: 'bajaj/estabilizador-barras-acero-ns',
        description: 'Estabilizador de barras fabricado en acero de alta resistencia. Aumenta la rigidez del tren delantero, reduciendo vibraciones y mejorando la estabilidad en curvas.',
        colors: ['Negro', 'Cromado'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns160', 'ns400'],
        featured: true
    },
    {
        id: 'bajaj-estabilizador-barras-tipo-nitrus',
        name: 'Estabilizador de Barras Tipo Nitrus',
        category: 'accesorios',
        price: 150000,
        image: `${SUPABASE_URL}bajaj/estabilizador-barras-tipo-nitrus/1.jpg`,
        folder: 'bajaj/estabilizador-barras-tipo-nitrus',
        description: 'Estabilizador de barras de lujo tipo Nitrus. Diseño superior y máxima efectividad para evitar el movimiento de las barras. Disponible en colores variados.',
        colors: ['Negro', 'Plateado', 'Azul'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns160', 'ns400'],
        featured: true
    },
    {
        id: 'uni-manubrios-universales',
        name: 'Manubrios de Lujo',
        category: 'accesorios',
        price: 120000,
        image: `${SUPABASE_URL}universales/manubrios-universales/1.jpg`,
        folder: 'universales/manubrios-universales',
        description: 'Manubrios universales de excelente calidad. Mejora la posición de manejo y el desempeño de tu motocicleta. Selecciona la versión deseada para conocer su precio.',
        variants: [
            { name: 'Macizo grueso + bases (replica)', price: 250000 },
            { name: 'Macizo grueso + bases (original)', price: 300000 },
            { name: 'Macizo delgado (original)', price: 215000 },
            { name: 'Tubular delgado', price: 120000 },
            { name: 'Manubrio SE 7/8', price: 170000 }
        ],
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'bajaj-full-system-ns200',
        name: 'Full System Pulsar NS 200',
        category: 'exostos',
        price: 300000,
        image: `${SUPABASE_URL}bajaj/full-system-ns200/1.jpg`,
        folder: 'bajaj/full-system-ns200',
        description: 'Sistema completo (Full System) para Bajaj Pulsar NS 200. Mejora drásticamente el rendimiento del motor y otorga un sonido deportivo inigualable. Acabado Tornasol exclusivo.',
        colors: ['Tornasol'],
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'bajaj-stop-integrado-tradicional-ns',
        name: 'Stop Integrado Tradicional Pulsar NS',
        category: 'accesorios',
        price: 100000,
        image: `${SUPABASE_URL}bajaj/stop-integrado-tradicional-ns/1.jpg`,
        folder: 'bajaj/stop-integrado-tradicional-ns',
        description: 'Stop integrado de diseño tradicional para Bajaj Pulsar NS. Cuenta con direccionales incorporadas para eliminar los porta placas abultados y tener una parte trasera más estilizada.',
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns160', 'ns400'],
        featured: true
    },
    {
        id: 'bajaj-fender-eliminator-ns',
        name: 'Fender Eliminator Pulsar NS',
        category: 'accesorios',
        price: 110000,
        image: `${SUPABASE_URL}bajaj/fender-eliminator-ns/1.jpg`,
        folder: 'bajaj/fender-eliminator-ns',
        description: 'Fender eliminator abatible deportivo para Bajaj Pulsar NS. Permite ajustar y alinear la placa mejorando la estética trasera, luciendo un aspecto racing y agresivo.',
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200', 'ns160', 'ns400'],
        featured: true
    },
    {
        id: 'uni-sliders-eje-srp',
        name: 'Sliders de Eje SRP Universales (El Par)',
        category: 'protecciones',
        price: 55000,
        image: `${SUPABASE_URL}universales/sliders-eje-srp/1.jpg`,
        folder: 'universales/sliders-eje-srp',
        description: 'Par de sliders de eje marca SRP. Brindan protección esencial para los ejes y tijera ante cualquier impacto. Diseño universal adaptable a múltiples marcas y modelos.',
        compatible_brands: ['universal'],
        compatible_models: ['universal'],
        featured: true
    },
    {
        id: 'bajaj-protector-mordaza-ns200',
        name: 'Protector de Mordaza o Caliper NS 200',
        category: 'protecciones',
        price: 35000,
        image: `${SUPABASE_URL}bajaj/protector-mordaza-ns200/1.jpg`,
        folder: 'bajaj/protector-mordaza-ns200',
        description: 'Protector de mordaza o caliper para Bajaj Pulsar NS 200. Brinda protección esencial contra impactos y suciedad, mejorando el estilo de los frenos.',
        compatible_brands: ['bajaj'],
        compatible_models: ['ns200'],
        featured: true
    },
    {
        id: 'yamaha-protector-radiador-mt09-v3-v4',
        name: 'Protector de Radiador MT-09 V3 / V4',
        category: 'protecciones',
        price: 135000,
        image: `${SUPABASE_URL}mt09/protector-radiador-v3-v4/1.jpg`,
        folder: 'mt09/protector-radiador-v3-v4',
        description: 'Protector de radiador para Yamaha MT-09 (versiones V3 y V4). Indispensable para evitar daños al radiador por piedras o partículas del camino. Disponibles en acabados Negro y Cromado.',
        colors: ['Cromado', 'Negro'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v3', 'mt09-v4'],
        featured: true
    },
    {
        id: 'mt09-estabilizador-direccion',
        name: 'Estabilizador de Dirección MT-09',
        category: 'accesorios',
        price: 490000,
        image: `${SUPABASE_URL}mt09/estabilizador-direccion/1.jpg`,
        folder: 'mt09/estabilizador-direccion',
        description: 'Estabilizador de dirección de alta precisión para Yamaha MT-09. Mejora la estabilidad a altas velocidades y evita movimientos bruscos del manubrio. El precio ya incluye la instalación profesional en nuestro taller.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v1-v2', 'mt09-v3', 'mt09-v4'],
        featured: true
    },
    {
        id: 'mt09-sliders-motor-alto-impacto',
        name: 'Sliders de Motor Alto Impacto MT-09',
        category: 'protecciones',
        price: 400000,
        image: `${SUPABASE_URL}mt09/sliders-motor-alto-impacto/1.jpg`,
        folder: 'mt09/sliders-motor-alto-impacto',
        description: 'Sliders de motor de alto impacto diseñados específicamente para la Yamaha MT-09 (V3 y V4). Fabricados en materiales de alta resistencia para absorber impactos y proteger el motor y chasis en caso de caídas.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v3', 'mt09-v4'],
        featured: true
    },
    {
        id: 'mt09-full-system-v3-v4',
        name: 'Full System Exosto MT-09 V3 / V4',
        category: 'exostos',
        price: 1450000,
        image: `${SUPABASE_URL}mt09/full-system-v3-v4/1.jpg`,
        folder: 'mt09/full-system-v3-v4',
        description: 'Sistema de escape completo (Full System) para Yamaha MT-09 (V3 y V4). Optimiza el flujo de gases, reduce el peso y entrega un sonido potente y deportivo. Disponible en acabados Tornasol y Cromado.',
        colors: [
            { name: 'Cromado', price: 1450000 },
            { name: 'Tornasol', price: 1550000 }
        ],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v3', 'mt09-v4'],
        featured: true
    },
    {
        id: 'mt09-fender-eliminator-abatible-v3',
        name: 'Fender Eliminator Abatible MT-09 V3',
        category: 'accesorios',
        price: 130000,
        image: `${SUPABASE_URL}mt09/fender-eliminator-abatible-v3/1.jpg`,
        folder: 'mt09/fender-eliminator-abatible-v3',
        description: 'Portaplaca abatible (Fender Eliminator) para Yamaha MT-09 V3. Diseño aerodinámico y resistente que permite ajustar la inclinación de la placa. Ideal para mejorar la estética deportiva de la moto.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v3'],
        featured: false
    },
    {
        id: 'mt09-cupula-v3',
        name: 'Cúpula Deportiva MT-09 V3',
        category: 'cupulas',
        price: 195000,
        image: `${SUPABASE_URL}mt09/cupula-v3/1.jpg`,
        folder: 'mt09/cupula-v3',
        description: 'Cúpula deportiva de alto impacto para Yamaha MT-09 V3. Mejora la aerodinámica y protege contra el viento en carretera, manteniendo el estilo agresivo de la moto. Fácil instalación.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v3'],
        featured: true
    },
    {
        id: 'mt09-cupula-v4',
        name: 'Cúpula Deportiva MT-09 V4 (2024)',
        category: 'cupulas',
        price: 300000,
        image: `${SUPABASE_URL}mt09/cupula-v4/1.jpg`,
        folder: 'mt09/cupula-v4',
        description: 'Cúpula aerodinámica exclusiva para la nueva Yamaha MT-09 V4. Mejora significativamente el confort en ruta y resalta el diseño futurista del nuevo modelo 2024. Calidad premium.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v4'],
        featured: true
    },
    {
        id: 'mt09-aleron-frontal-v4',
        name: 'Alerón Frontal MT-09 V4',
        category: 'accesorios',
        price: 240000,
        image: `${SUPABASE_URL}mt09/aleron-frontal-v4/1.jpg`,
        folder: 'mt09/aleron-frontal-v4',
        description: 'Alerón frontal aerodinámico (Downforce) diseñado para la Yamaha MT-09 V4. Mejora la estabilidad a alta velocidad y le da un aspecto mucho más agresivo y de competencia inspirado en MotoGP.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v4'],
        featured: true
    },
    {
        id: 'mt09-aleron-frontal-v3',
        name: 'Alerón Frontal MT-09 V3',
        category: 'accesorios',
        price: 200000,
        image: `${SUPABASE_URL}mt09/aleron-frontal-v3/1.jpg`,
        folder: 'mt09/aleron-frontal-v3',
        description: 'Alerón frontal deportivo diseñado específicamente para la Yamaha MT-09 V3. Aumenta la carga aerodinámica delantera y personaliza la estética con un toque racing de alto nivel. Resistente y ligero.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v3'],
        featured: true
    },
    {
        id: 'mt09-protectores-carcasas-gbracing',
        name: 'Protectores de Carcasas GB Racing MT-09 V3 / V4',
        category: 'protecciones',
        price: 340000,
        image: `${SUPABASE_URL}mt09/protectores-carcasas-gbracing/1.jpg`,
        folder: 'mt09/protectores-carcasas-gbracing',
        description: 'Kit de protectores de motor GB Racing para Yamaha MT-09 (V3 y V4). Ofrece una protección superior para las carcasas del motor en caso de arrastre o caída. Disponibles en acabados Negro y Carbono.',
        colors: ['Negro', 'Carbono'],
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v3', 'mt09-v4'],
        featured: true
    },
    {
        id: 'mt09-protector-motor-mg',
        name: 'Protector de Motor MG MT-09',
        category: 'protecciones',
        price: 310000,
        image: `${SUPABASE_URL}mt09/protector-motor-mg/1.jpg`,
        folder: 'mt09/protector-motor-mg',
        description: 'Defensa o protector de motor marca MG para Yamaha MT-09. Diseño robusto y minimalista que protege las tapas del motor contra golpes y rayones sin comprometer la estética de la moto.',
        compatible_brands: ['yamaha'],
        compatible_models: ['mt09-v1-v2', 'mt09-v3', 'mt09-v4'],
        featured: true
    }
];

// Brands and Models Database
const motorcycles = [
    {
        id: 'indumentaria',
        name: 'INDUMENTARIA',
        logo: 'https://cdn-icons-png.flaticon.com/512/3228/3228308.png', 
        models: [
            { id: 'guantes', name: 'Guantes' },
            { id: 'chaquetas', name: 'Chaquetas' },
            { id: 'botas', name: 'Botas' },
            { id: 'maletas', name: 'Maletas' },
            { id: 'pecheras', name: 'Pecheras' }
        ]
    },
    {
        id: 'yamaha',
        name: 'YAMAHA',
        logo: 'images/yamaha.jpg',
        models: [
            { id: 'mt03', name: 'MT-03' },
            { id: 'mt07', name: 'MT-07' },
            { 
                id: 'mt09', 
                name: 'MT-09',
                versions: [
                    { id: 'mt09-v1-v2', name: 'Versión 1 y 2' },
                    { id: 'mt09-v3', name: 'Versión 3 (2021+)' },
                    { id: 'mt09-v4', name: 'Versión 4 (2024+)' }
                ]
            },
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
            { id: 'dr650', name: 'DR650' },
            { id: 'gixxer150', name: 'GIXXER 150' },
            { id: 'gixxer250', name: 'GIXXER 250' },
            { id: 'gixxersf', name: 'GIXXER SF' }
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
    },
    {
        id: 'bajaj',
        name: 'BAJAJ',
        logo: 'images/bajaj.png',
        models: [
            { id: 'ns200', name: 'NS 200' },
            { id: 'dominar400', name: 'Dominar 400' },
            { id: 'ns400', name: 'NS 400' },
            { id: 'pulsar160', name: 'Pulsar 160' },
            { id: 'ns160', name: 'NS 160' }
        ]
    },
    {
        id: 'tvs',
        name: 'TVS',
        logo: 'https://companieslogo.com/img/orig/TVSMOTOR.NS-50798e29.png?t=1612544229',
        models: [
            { id: 'apache', name: 'Apache (Todas)' }
        ]
    }
];

// Category information
const categories = {
    cupulas: { name: 'Cúpulas', icon: '🏍️' },
    espejos: { name: 'Espejos', icon: '🔍' },
    maletas: { name: 'Maletas', icon: '💼' },
    exostos: { name: 'Exostos', icon: '🔥' },
    pecheras: { name: 'Pecheras', icon: '🛡️' },
    indumentaria: { name: 'Indumentaria', icon: '🧥' },
    protecciones: { name: 'Protecciones', icon: '🛡️' },
    caballetes: { name: 'Caballetes', icon: '⚙️' },
    stickers: { name: 'Stickers', icon: '✨' },
    accesorios: { name: 'Accesorios', icon: '💎' }
};
