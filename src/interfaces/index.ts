
export interface ICharacter {
  name?: string;
  stars?: number;
  element?: string;
  weapon?: string;
  imageUrl?: string;
  character?: ICharacterState;
}

interface ITalents {
  name: string;
  unlock: string;
  description: string;
  icon: string;
}

interface ICharacterState extends ICharacter {
  id: number;
  name: string;
  description: string;
  vision: string;
  weapon: string;
  rarity: string;
  icon: string;
  skillTalents: Array<ITalents>;
  passiveTalents: Array<ITalents>;
  constellations: Array<ITalents>;
  upgrades: Array<{
    rank: string;
    level: string;
    cost: string;
    material_one: {
      name: string;
      icon: string;
    }
    material_two: {
      name: string;
      icon: string;
    }
    material_three: {
      name: string;
      icon: string;
    }
    material_four: {
      name: string;
      icon: string;
    }
  }>
}
