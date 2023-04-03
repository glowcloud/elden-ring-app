import { useState, useCallback } from "react";
import { BUILDS_API_URL } from "../api/apiRoutes";
// import { useAuth } from "./useAuth";

import { useAuthContext } from "./useAuthContext";

const calculateLevel = (baseStats, stats) => {
  const startingLevel = baseStats["level"] * 1;
  const baseStatsSum =
    baseStats["vigor"] * 1 +
    baseStats["mind"] * 1 +
    baseStats["endurance"] * 1 +
    baseStats["strength"] * 1 +
    baseStats["dexterity"] * 1 +
    baseStats["intelligence"] * 1 +
    baseStats["faith"] * 1 +
    baseStats["arcane"] * 1;
  const statsSum =
    stats["vigor"] +
    stats["mind"] +
    stats["endurance"] +
    stats["strength"] +
    stats["dexterity"] +
    stats["intelligence"] +
    stats["faith"] +
    stats["arcane"];
  return startingLevel + (statsSum - baseStatsSum);
};

const findItem = (arr, id) => {
  return arr.find((item) => item.id === id);
};

const findChoice = (arr1, arr2, type1, type2, id) => {
  const choice1 = findItem(arr1, id);
  if (choice1) {
    return { item: choice1, type: type1 };
  }

  const choice2 = findItem(arr2, id);
  if (choice2) {
    return { item: choice2, type: type2 };
  }

  return { item: {}, type: "" };
};

const useCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuthContext();

  const handleCreate = useCallback(
    async (
      data,
      classes,
      items,
      sorceries,
      incantations,
      ammos,
      weapons,
      shields,
      ashes,
      talismans
    ) => {
      setIsLoading(true);

      const build = {
        buildName: data.root.buildName,
        chosenClass: classes[data.root.classSelect],
        stats: {
          ...data.stats,
          level: calculateLevel(
            classes[data.root.classSelect].stats,
            data.stats
          ),
        },
        items: [
          findItem(items, data.items.itemSelect0),
          findItem(items, data.items.itemSelect1),
          findItem(items, data.items.itemSelect2),
          findItem(items, data.items.itemSelect3),
          findItem(items, data.items.itemSelect4),
          findItem(items, data.items.itemSelect5),
          findItem(items, data.items.itemSelect6),
          findItem(items, data.items.itemSelect7),
          findItem(items, data.items.itemSelect8),
          findItem(items, data.items.itemSelect9),
        ],
        spells: [
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect0
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect1
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect2
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect3
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect4
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect5
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect6
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect7
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect8
          ),
          findChoice(
            sorceries,
            incantations,
            "sorcery",
            "incantation",
            data.spells.spellSelect9
          ),
        ],
        ammos: [
          findItem(ammos, data.equipment.ammoSelect0),
          findItem(ammos, data.equipment.ammoSelect1),
          findItem(ammos, data.equipment.ammoSelect2),
          findItem(ammos, data.equipment.ammoSelect3),
        ],
        leftWeapons: [
          {
            weapon: findChoice(
              weapons,
              shields,
              "weapon",
              "shield",
              data.equipment.leftWeaponSelect0
            ),
            ash: findItem(ashes, data.equipment.leftWeaponAshSelect0),
          },
          {
            weapon: findChoice(
              weapons,
              shields,
              "weapon",
              "shield",
              data.equipment.leftWeaponSelect1
            ),
            ash: findItem(ashes, data.equipment.leftWeaponAshSelect1),
          },
          {
            weapon: findChoice(
              weapons,
              shields,
              "weapon",
              "shield",
              data.equipment.leftWeaponSelect2
            ),
            ash: findItem(ashes, data.equipment.leftWeaponAshSelect2),
          },
        ],
        rightWeapons: [
          {
            weapon: findChoice(
              weapons,
              shields,
              "weapon",
              "shield",
              data.equipment.rightWeaponSelect0
            ),
            ash: findItem(ashes, data.equipment.rightWeaponAshSelect0),
          },
          {
            weapon: findChoice(
              weapons,
              shields,
              "weapon",
              "shield",
              data.equipment.rightWeaponSelect1
            ),
            ash: findItem(ashes, data.equipment.rightWeaponAshSelect1),
          },
          {
            weapon: findChoice(
              weapons,
              shields,
              "weapon",
              "shield",
              data.equipment.rightWeaponSelect2
            ),
            ash: findItem(ashes, data.equipment.rightWeaponAshSelect2),
          },
        ],
        talismans: [
          findItem(talismans, data.equipment.talismanSelect0),
          findItem(talismans, data.equipment.talismanSelect1),
          findItem(talismans, data.equipment.talismanSelect2),
          findItem(talismans, data.equipment.talismanSelect3),
        ],
        user_id: user.id,
      };

      const response = await fetch(BUILDS_API_URL + "builds", {
        method: "POST",
        body: JSON.stringify(build),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      setIsLoading(false);

      if (response.ok) {
        return true;
      } else {
        setError(json);
        return false;
      }
    }
  );

  return { handleCreate, isLoading, error };
};

export default useCreate;
