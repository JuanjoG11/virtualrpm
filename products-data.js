// Virtual RPM Product Database
const products = [
    // Cúpulas
    {
        id: 'cup-001',
        name: 'Cúpula Racing Ahumada',
        category: 'cupulas',
        price: 185000,
        image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500&h=500&fit=crop',
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
    stickers: { name: 'Stickers', icon: '✨' }
};
