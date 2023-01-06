export function getRandomAmount<T>(tab: T[], amount: number) {
    const randomisedTab = tab.sort(() => Math.random() - 0.5);
    return randomisedTab.slice(0, amount);
}
