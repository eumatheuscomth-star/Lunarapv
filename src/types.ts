/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LunarPhase {
  id: string;
  name: string;
  icon: string;
  astrologicalMeaning: string;
  recommendation: string;
  energyLevel: string; // e.g. "Sutil (0%)", "Crescente (50%)", "Máximo (100%)"
  rulingAspect: string; // e.g. "Intuição", "Ação", "Colheita", "Soltura"
  color: string;
}

export interface AtuacaoCard {
  title: string;
  description: string;
  benefit: string;
  features: string[];
}

export interface CorporateInfo {
  brandName: string;
  companyName: string;
  cnpj: string;
  website: string;
  address: string;
  contactEmail: string;
}
