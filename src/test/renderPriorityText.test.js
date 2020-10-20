import renderPriorityText from '../renderPriorityText';

test('renderPriorityText: it Should be able to display the correct priority text', () => {
  const high = renderPriorityText(3);
  const medium = renderPriorityText(2);
  const low = renderPriorityText(1);

  expect([high, medium, low]).toBeDefined();
  expect(high).toBe('High');
});
