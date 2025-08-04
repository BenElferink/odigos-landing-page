'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FlexRow } from '@/styles';
import styled from 'styled-components';
import { useMobile } from '@/contexts';
import { Button, Text } from '@/components';

interface AnnouncementBannerProps {
  title: string;
  link: string;
  linkText: string;
}

const Container = styled.div<{ $isMobile: boolean }>`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  background-color: ${({ theme }) => theme.colors.cyan};
  border-radius: 0 0 24px 24px;
  padding: 16px 24px;
  width: calc(100% - 48px);
`;

const Divider = styled.div`
  width: 1.5px;
  height: 20px;
  opacity: 0.4;
  background: ${({ theme }) => theme.colors.black};
`;

const Typography = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
`;

const Icon = styled((props) => <Image width={24} height={24} {...props} />)`
  filter: invert(100%);
`;

export const AnnouncementBanner = ({ title, link, linkText }: AnnouncementBannerProps) => {
  const { isMobile } = useMobile();
  const [hide, setHide] = useState(false);

  if (hide || !title) {
    return null;
  }

  return (
    <Container $isMobile={isMobile}>
      <div />

      <FlexRow $gap={isMobile ? 12 : 24} $align='center'>
        <FlexRow $gap={4} $align='center'>
          <Icon src='/assets/icons/flame.svg' alt='flame' />
          <Typography>{title}</Typography>
        </FlexRow>
        <Divider />
        <Button variant='transparent' padding='0' href={link}>
          <Typography textDecoration='underline'>{linkText}</Typography>
        </Button>
      </FlexRow>

      <Button variant='transparent' padding='0' onClick={() => setHide(true)}>
        <Icon src='/assets/icons/close.svg' alt='close' />
      </Button>
    </Container>
  );
};
