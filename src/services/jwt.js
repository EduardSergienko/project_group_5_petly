const getUnixTime = () => Math.round(+new Date() / 1000);

const LIFE_TIME_TO_UPDATE = 0.5;

const isTokenExpired = token => {
  if (!token) {
    return true;
  }

  try {
    const tokenInfo = token.split('.')[1];
    const tokenInfoDecoded = window.atob(tokenInfo);
    const { exp, iat } = JSON.parse(tokenInfoDecoded);

    const tokenLeftTime = exp - getUnixTime();

    const minLifeTimeForUpdate = (exp - iat) * LIFE_TIME_TO_UPDATE;

    return tokenLeftTime < minLifeTimeForUpdate;
  } catch (e) {
    console.error(e);
    return true;
  }
};

export default isTokenExpired;
