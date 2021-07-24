export function questionSort(objects: any[]): any[] {
    return objects
        .map(value => ({ value, randonValue: Math.random() }))
        .sort((obj1, obj2) => obj1.randonValue - obj2.randonValue)
        .map(obj => obj.value)
}