import {Wallet} from "../interfaces";
import {KeyPair, keyPairFromSeed} from "@nodefactory/filecoin-address";

/**
 * Return derived KeyPair from seed.
 * @param wallet
 */
export async function getKeyPair(wallet: Wallet): Promise<KeyPair> {
  const seed = await wallet.getAppKey();
  const network = await wallet.getPluginState().filecoin.config.network;
  return keyPairFromSeed(seed, network);
}