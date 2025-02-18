import { Asset } from './entities/asset.entity';

export class AssetPresenter {
  constructor(private readonly asset: Asset) {}
  toJSON() {
    return {
      _id: this.asset._id,
      name: this.asset.name,
      symbol: this.asset.symbol,
      price: this.asset.price,
      image_url: `http://localhos:9000/assets/${this.asset.image}`,
    };
  }
}
