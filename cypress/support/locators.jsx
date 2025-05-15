export const product = (text, type = 'normal') => {
    switch (type) {
        case 'normal':
            return `[data-cy="product-${text}"]`;
        case 'class':
            return '.product-card';
        case 'classH2':
            return '.product-card h2';
        default:
            return `[data-cy="product-${text}"]`;
    }
};

export const grid = (type) => `[data-cy="test-grid-${type}"]`;

export const input = (type) => `[data-cy="${type}-input"]`;

export const button = (type) => `[data-cy="${type}-button"]`;

export const message = (type) => `[data-cy="${type}-message"]`;
