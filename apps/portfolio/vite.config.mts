import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

const shouldExtract = process.env.EXTRACT === '1'

const tamaguiConfig = {
  components: ['tamagui'],
  config: 'src/tamagui.config.ts'
}

export default defineConfig({
  clearScreen: true,
  plugins: [
    react(),
    nxViteTsPaths(),
    tamaguiPlugin(tamaguiConfig),
    shouldExtract ? tamaguiExtractPlugin(tamaguiConfig) : null
  ].filter(Boolean)
})
