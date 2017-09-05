export interface Payload<TData> {
    error?: Error,
    changed?: boolean,
    data: TData
}