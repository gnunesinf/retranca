import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '0c4b542a15945a697e1bd412c0',
  version: 'v3',
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read({
      slug: postSlug,
      include: 'tags,authors',
    })
    .catch((err: Error) => {
      console.error(err);
    });
}

export async function getPostsFilterdByTag(filter: string, limit = 6) {
  return await api.posts.browse({
    limit: String(limit),
    include: 'tags,authors',
    filter: `tag:${filter}`,
  });
}

export async function getPostsLimited(limit = 6) {
  return await api.posts.browse({
    limit: String(limit),
    include: 'tags,authors',
  });
}

export async function getPostsTest(limit = 5) {
  return await api.posts.browse({
    limit: String(limit),
    filter: `tag:-main`,
    include: 'tags,authors',
  });
}
