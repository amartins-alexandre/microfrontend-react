// Anything exported from this file is importable by other in-browser modules.
export function listenEvent(name: string, listener: EventListenerOrEventListenerObject) {
    addEventListener(name, listener)
}

export function emitEvent(name: string, data: CustomEventInit) {
    dispatchEvent(new CustomEvent(name, data))
}
