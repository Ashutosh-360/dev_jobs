export function formDataToJson(formData: FormData): Record<string, string | Blob> {
  return Array.from(formData.entries()).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, string | Blob>);
}
