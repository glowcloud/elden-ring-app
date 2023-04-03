import useFetch from "./useFetch";

const useFormFetch = () => {
  const { data: classes, isLoading: isLoadingClasses } = useFetch("classes");
  const { data: ammos, isLoading: isLoadingAmmos } = useFetch("ammos");
  const { data: ashes, isLoading: isLoadingAshes } = useFetch("ashes");
  const { data: shields, isLoading: isLoadingShields } = useFetch("shields");
  const { data: talismans, isLoading: isLoadingTalismans } =
    useFetch("talismans");
  const { data: incantations, isLoading: isLoadingIncantations } =
    useFetch("incantations");
  const { data: sorceries, isLoading: isLoadingSorceries } =
    useFetch("sorceries");
  const { data: spirits, isLoading: isLoadingSpirits } = useFetch("spirits");

  const { data: items0, isLoading: isLoadingItems0 } =
    useFetch(`items?limit=100`);
  const { data: items1, isLoading: isLoadingItems1 } = useFetch(
    `items?limit=100&page=1`
  );
  const { data: items2, isLoading: isLoadingItems2 } = useFetch(
    `items?limit=100&page=2`
  );
  const { data: items3, isLoading: isLoadingItems3 } = useFetch(
    `items?limit=100&page=3`
  );
  const { data: items4, isLoading: isLoadingItems4 } = useFetch(
    `items?limit=100&page=4`
  );

  const { data: weapons0, isLoading: isLoadingWeapons0 } =
    useFetch(`weapons?limit=100`);
  const { data: weapons1, isLoading: isLoadingWeapons1 } = useFetch(
    `weapons?limit=100&page=1`
  );
  const { data: weapons2, isLoading: isLoadingWeapons2 } = useFetch(
    `weapons?limit=100&page=2`
  );
  const { data: weapons3, isLoading: isLoadingWeapons3 } = useFetch(
    `weapons?limit=100&page=3`
  );

  const weapons =
    isLoadingWeapons0 ||
    isLoadingWeapons1 ||
    isLoadingWeapons2 ||
    isLoadingWeapons3
      ? []
      : weapons0.concat(weapons1).concat(weapons2).concat(weapons3);

  const items =
    isLoadingItems0 ||
    isLoadingItems1 ||
    isLoadingItems2 ||
    isLoadingItems3 ||
    isLoadingItems4
      ? []
      : items0.concat(items1).concat(items2).concat(items3).concat(items4);

  const isLoading =
    isLoadingItems0 ||
    isLoadingItems1 ||
    isLoadingItems2 ||
    isLoadingItems3 ||
    isLoadingItems4 ||
    isLoadingWeapons0 ||
    isLoadingWeapons1 ||
    isLoadingWeapons2 ||
    isLoadingWeapons3 ||
    isLoadingClasses ||
    isLoadingAmmos ||
    isLoadingAshes ||
    isLoadingShields ||
    isLoadingTalismans ||
    isLoadingIncantations ||
    isLoadingSorceries ||
    isLoadingSpirits;

  return {
    classes,
    items,
    weapons,
    ammos,
    ashes,
    shields,
    talismans,
    incantations,
    sorceries,
    spirits,
    isLoading,
  };
};

export default useFormFetch;
