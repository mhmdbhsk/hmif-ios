export interface AppLinksDataDto {
  link: string;
  label: string;
  disabled?: boolean;
  links?: AppDataItemDto[];
}

export interface AppDataItemDto {
  link: string;
  label: string;
}
