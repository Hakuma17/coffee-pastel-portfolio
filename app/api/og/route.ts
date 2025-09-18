/* eslint-disable @next/next/no-img-element */
import {ImageResponse} from 'next/og';
import React from 'react';

export const runtime = 'edge';

export async function GET() {
  const bg = '#FAF6F1';
  const ink = '#2B2A28';
  const rose = '#D7A9A3';

  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          height: '100%', width: '100%', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          backgroundColor: bg, color: ink, position: 'relative'
        }
      },
      [
        React.createElement('div', {
          key: 'bg',
          style: {
            position: 'absolute', inset: 0,
            backgroundImage:
              'radial-gradient(circle at 16px 16px, rgba(0,0,0,0.05) 2px, transparent 3px)',
            backgroundSize: '48px 48px', opacity: 0.6
          }
        }),
        React.createElement(
          'div',
          {
            key: 'card',
            style: {
              display: 'flex', flexDirection: 'row', gap: 24, padding: 48,
              backgroundColor: 'rgba(241,231,222,0.9)', borderRadius: 20,
              boxShadow: '0 12px 32px rgba(0,0,0,0.06)'
            }
          },
          [
            React.createElement('div', {key:'logo', style: {width:64,height:64,backgroundColor:rose,borderRadius:12}}),
            React.createElement(
              'div',
              {key:'text', style:{display:'flex',flexDirection:'column'}},
              [
                React.createElement('div', {key:'title', style:{fontSize:48,fontWeight:700}}, 'Coffee Pastel Portfolio'),
                React.createElement('div', {key:'subtitle', style:{fontSize:28,opacity:0.8}}, 'Minimal • TH/EN • Next.js 14')
              ]
            )
          ]
        )
      ]
    ),
    {width: 1200, height: 630}
  );
}
