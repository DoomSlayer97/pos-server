
type EnvType = 'dev' | 'prod'

export interface EnvProps {
  ENV_TYPE: EnvType
  DB_TYPE: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_PASSWORD?: string;
  DB_DATABASE: string;
  DB_USERNAME: string;
}