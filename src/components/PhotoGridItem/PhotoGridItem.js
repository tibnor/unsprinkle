import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const baseSrc = src.replace(".jpg", "");
  const srcset = `
  ${baseSrc}.avif 1x,
  ${baseSrc}@2x.avif 2x,
  ${baseSrc}@3x.avif 3x,

  ${baseSrc}.jpg 1x,
  ${baseSrc}@2x.jpg 2x,
  ${baseSrc}@3x.jpg 3x,
  `

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <Image src={src} srcSet={srcset} alt={alt}/>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  flex-shrink: 0;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:last-of-type {
    flex-shrink: 1;
  }
`;

export default PhotoGridItem;
