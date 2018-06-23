
import { Service as S, ModuleArguments, ServiceOptions } from '@rxdi/core'; 

export function Controller<T, K extends keyof T>(options?: ServiceOptions<T, K>): Function {
    return S<T, K>(options);
}