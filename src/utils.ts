const logicalPostfixes = ['-block', '-block-start', '-block-end', '-inline', '-inline-start', '-inline-end'];

export const logicalProperty = (name: string): string[] => [name, ...logicalPostfixes.map((postfix) => name + postfix)];
