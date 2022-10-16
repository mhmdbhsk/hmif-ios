export interface AppLinksDataDto {
  link: string;
  label: string;
  links?: AppDataItemDto[];
}

export interface AppDataItemDto {
  link: string;
  label: string;
}
