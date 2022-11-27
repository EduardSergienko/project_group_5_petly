export const cityInputValidation = value => {
  if (value) {
    const comma = value.search(',');
    if (!comma || comma < 4) {
      return false;
    }
    const [, region] = value.split(',');

    if (!region?.trim()) {
      return false;
    }
    return true;
  }
};
