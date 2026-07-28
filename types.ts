export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  iconName: string;
}

export interface PainPointItem {
  id: string;
  problem: string;
  solution: string;
  quote: string;
  icon: string;
}

export interface DemoSample {
  id: string;
  category: 'voice' | 'photo';
  title: string;
  rawInput: string;
  imagePlaceholder?: string;
  parsedResult: {
    nutrition: string;
    physical: string;
    mental: string;
    careAlert: 'safe' | 'caution' | 'notice';
    summaryReport: string;
  };
}
