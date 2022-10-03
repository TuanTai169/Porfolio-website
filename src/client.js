import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'isbabxbk',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token:
    'sk9ViYq0pPQ2k9GwMvxJ0eHuhnnm1Y19lK2uGfHA4BbObY9VnjTnYgtDsN1H4myCzR1smTQvlSMvkiebpnH7JHjqOTUoynlvMdwynoVLcKa13wj7jm3eQkPTnzHQk59riu2tbkiw5eysVJ2JiuIgWjVqAEeCM4VC1eDGgQJfXNuHjnOFNMGD',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
