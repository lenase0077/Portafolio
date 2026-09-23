/**
 * Strategy pattern — chapter id → body renderer.
 * Add a chapter by registering one strategy (and its body in chapterBodies.jsx).
 */
import {
  ArrivalBody,
  StoryBody,
  WorkBody,
  ToolsBody,
  PathBody,
  HelloBody,
} from './chapterBodies.jsx';

export const chapterStrategies = Object.freeze({
  arrival: (ctx) => <ArrivalBody {...ctx} />,
  story: (ctx) => <StoryBody {...ctx} />,
  work: (ctx) => <WorkBody {...ctx} />,
  tools: (ctx) => <ToolsBody {...ctx} />,
  path: (ctx) => <PathBody {...ctx} />,
  hello: (ctx) => <HelloBody {...ctx} />,
});

export function renderChapterBody(id, ctx) {
  const strategy = chapterStrategies[id];
  return strategy ? strategy(ctx) : null;
}
