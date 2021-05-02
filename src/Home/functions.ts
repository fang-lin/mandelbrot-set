export type Size = [number, number];

export function getPageSize(content: Element | null): Size {
    if (content) {
        const {width, height} = content.getBoundingClientRect();
        return [width, height];
    }
    return [0, 0];
}