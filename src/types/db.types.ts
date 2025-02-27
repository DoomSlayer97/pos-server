export enum DBTABLES {
  CATEGORY = 'categories',
  CUSTOMER = 'customers',
  FILES = 'files',
  MODULE = 'modules',
  ORDER = 'orders',
  PRODUCT = 'products',
  PROFILE = 'profiles',
  USER = 'users',
  ACCESSUSER = 'accessusers',
  MODULEACCESS = 'moduleaccess',
  ORDERPRODUCT = 'orderproducts',
  PRODUCTPROVIDER = 'productproviders',
  TEMPLATEPROFILE = 'templateprofiles',
  PROFILEMODULE = 'profilemodules',
  PROFILEACCESS = 'profileaccess'
}

export enum DBSCHEMAS {
  SALE = 'sales',
  USER = 'users',
  PRODUCT = 'products',
  MISC = 'miscs'
}

export enum DBVOIDFUNCTIONS {
  CREATE_PRODUCT = 'fn_create_product',
}

export enum DBFUNCTIONS {
  GENERATE_SKU = 'generate_sku'
}
