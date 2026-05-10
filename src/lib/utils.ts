export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function withBasePath(path: string): string {
  const basePath = getBasePath();

  if (!basePath || path.startsWith('http') || path.startsWith('mailto:')) {
    return path;
  }

  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
